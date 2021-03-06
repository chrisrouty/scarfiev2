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
  Product,
  ProductImage,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductProductImageController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/product-images', {
    responses: {
      '200': {
        description: 'Array of Product has many ProductImage',
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
    return this.productRepository.productImages(id).find(filter);
  }

  @post('/products/{id}/product-images', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductImage)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Product.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {
            title: 'NewProductImageInProduct',
            exclude: ['id'],
            optional: ['productId']
          }),
        },
      },
    }) productImage: Omit<ProductImage, 'id'>,
  ): Promise<ProductImage> {
    return this.productRepository.productImages(id).create(productImage);
  }

  @patch('/products/{id}/product-images', {
    responses: {
      '200': {
        description: 'Product.ProductImage PATCH success count',
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
    return this.productRepository.productImages(id).patch(productImage, where);
  }

  @del('/products/{id}/product-images', {
    responses: {
      '200': {
        description: 'Product.ProductImage DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductImage)) where?: Where<ProductImage>,
  ): Promise<Count> {
    return this.productRepository.productImages(id).delete(where);
  }
}
