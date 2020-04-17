import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {Image, ImageRelations, ProductImage, Product} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProductImageRepository} from './product-image.repository';
import {ProductRepository} from './product.repository';

export class ImageRepository extends DefaultCrudRepository<
  Image,
  typeof Image.prototype.id,
  ImageRelations
> {

  public readonly productImage: BelongsToAccessor<ProductImage, typeof Image.prototype.id>;

  public readonly productImages: HasManyRepositoryFactory<ProductImage, typeof Image.prototype.id>;

  public readonly product: HasOneRepositoryFactory<Product, typeof Image.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProductImageRepository') protected productImageRepositoryGetter: Getter<ProductImageRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Image, dataSource);
    this.product = this.createHasOneRepositoryFactoryFor('product', productRepositoryGetter);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
    this.productImages = this.createHasManyRepositoryFactoryFor('productImages', productImageRepositoryGetter,);
    this.registerInclusionResolver('productImages', this.productImages.inclusionResolver);
  }
}
