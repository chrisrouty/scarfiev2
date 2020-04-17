import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';
import {Image} from './image.model';

@model()
export class ProductImage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  @property({
    type: 'number',
  })
  imageId?: number;

  constructor(data?: Partial<ProductImage>) {
    super(data);
  }
}

export interface ProductImageRelations {
  // describe navigational properties here
}

export type ProductImageWithRelations = ProductImage & ProductImageRelations;
