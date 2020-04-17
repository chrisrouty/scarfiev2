import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ProductImage} from '../models';
import {ProductImageRepository} from '../repositories';

export class ProductImageController {
  constructor(
    @repository(ProductImageRepository)
    public productImageRepository : ProductImageRepository,
  ) {}

  @post('/product-images', {
    responses: {
      '200': {
        description: 'ProductImage model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductImage)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {
            title: 'NewProductImage',
            exclude: ['id'],
          }),
        },
      },
    })
    productImage: Omit<ProductImage, 'id'>,
  ): Promise<ProductImage> {
    return this.productImageRepository.create(productImage);
  }

  @get('/product-images/count', {
    responses: {
      '200': {
        description: 'ProductImage model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProductImage) where?: Where<ProductImage>,
  ): Promise<Count> {
    return this.productImageRepository.count(where);
  }

  @get('/product-images', {
    responses: {
      '200': {
        description: 'Array of ProductImage model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProductImage, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProductImage) filter?: Filter<ProductImage>,
  ): Promise<ProductImage[]> {
    return this.productImageRepository.find(filter);
  }

  @patch('/product-images', {
    responses: {
      '200': {
        description: 'ProductImage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {partial: true}),
        },
      },
    })
    productImage: ProductImage,
    @param.where(ProductImage) where?: Where<ProductImage>,
  ): Promise<Count> {
    return this.productImageRepository.updateAll(productImage, where);
  }

  @get('/product-images/{id}', {
    responses: {
      '200': {
        description: 'ProductImage model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProductImage, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductImage, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductImage>
  ): Promise<ProductImage> {
    return this.productImageRepository.findById(id, filter);
  }

  @patch('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductImage, {partial: true}),
        },
      },
    })
    productImage: ProductImage,
  ): Promise<void> {
    await this.productImageRepository.updateById(id, productImage);
  }

  @put('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productImage: ProductImage,
  ): Promise<void> {
    await this.productImageRepository.replaceById(id, productImage);
  }

  @del('/product-images/{id}', {
    responses: {
      '204': {
        description: 'ProductImage DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productImageRepository.deleteById(id);
  }
}
