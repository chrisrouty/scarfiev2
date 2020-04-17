import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Image,
  Product,
} from '../models';
import {ImageRepository} from '../repositories';

export class ImageProductController {
  constructor(
    @repository(ImageRepository) protected imageRepository: ImageRepository,
  ) { }

  @get('/images/{id}/product', {
    responses: {
      '200': {
        description: 'Image has one Product',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Product),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Product>,
  ): Promise<Product> {
    return this.imageRepository.product(id).get(filter);
  }

  @post('/images/{id}/product', {
    responses: {
      '200': {
        description: 'Image model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Image.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProductInImage',
            exclude: ['id'],
            optional: ['imageIdDefault']
          }),
        },
      },
    }) product: Omit<Product, 'id'>,
  ): Promise<Product> {
    return this.imageRepository.product(id).create(product);
  }

  @patch('/images/{id}/product', {
    responses: {
      '200': {
        description: 'Image.Product PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Partial<Product>,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.imageRepository.product(id).patch(product, where);
  }

  @del('/images/{id}/product', {
    responses: {
      '200': {
        description: 'Image.Product DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.imageRepository.product(id).delete(where);
  }
}
