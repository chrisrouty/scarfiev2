import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Product, ProductRelations, ProductImage} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductImageRepository} from './product-image.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly productImage: BelongsToAccessor<ProductImage, typeof Product.prototype.id>;

  public readonly productImages: HasManyRepositoryFactory<ProductImage, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProductImageRepository') protected productImageRepositoryGetter: Getter<ProductImageRepository>,
  ) {
    super(Product, dataSource);
    this.productImages = this.createHasManyRepositoryFactoryFor('productImages', productImageRepositoryGetter,);
    this.registerInclusionResolver('productImages', this.productImages.inclusionResolver);
  }
}
