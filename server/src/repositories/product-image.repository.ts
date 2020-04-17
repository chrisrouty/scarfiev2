import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ProductImage, ProductImageRelations, Product, Image} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductRepository} from './product.repository';
import {ImageRepository} from './image.repository';

export class ProductImageRepository extends DefaultCrudRepository<
  ProductImage,
  typeof ProductImage.prototype.id,
  ProductImageRelations
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof ProductImage.prototype.id>;

  public readonly images: HasManyRepositoryFactory<Image, typeof ProductImage.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('ImageRepository') protected imageRepositoryGetter: Getter<ImageRepository>,
  ) {
    super(ProductImage, dataSource);
  }
}
