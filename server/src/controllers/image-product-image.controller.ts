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
  ProductImage,
} from '../models';
import {ImageRepository} from '../repositories';

export class ImageProductImageController {
  constructor(
    @repository(ImageRepository) protected imageRepository: ImageRepository,
  ) { }

  @get('/images/{id}/product-images', {
    responses: {
      '200': {
        description: 'Array of Image has many ProductImage',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProductImage)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProductImage>,
  ): Promise<ProductImage[]> {
    return this.imageRepository.productImages(id).find(filter);
  }

  @post('/images/{id}/product-images', {
    responses: {
      '200': {
        description: 'Image model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductImage)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Image.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {
            title: 'NewProductImageInImage',
            exclude: ['id'],
            optional: ['imageId']
          }),
        },
      },
    }) productImage: Omit<ProductImage, 'id'>,
  ): Promise<ProductImage> {
    return this.imageRepository.productImages(id).create(productImage);
  }

  @patch('/images/{id}/product-images', {
    responses: {
      '200': {
        description: 'Image.ProductImage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {partial: true}),
        },
      },
    })
    productImage: Partial<ProductImage>,
    @param.query.object('where', getWhereSchemaFor(ProductImage)) where?: Where<ProductImage>,
  ): Promise<Count> {
    return this.imageRepository.productImages(id).patch(productImage, where);
  }

  @del('/images/{id}/product-images', {
    responses: {
      '200': {
        description: 'Image.ProductImage DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductImage)) where?: Where<ProductImage>,
  ): Promise<Count> {
    return this.imageRepository.productImages(id).delete(where);
  }
}
