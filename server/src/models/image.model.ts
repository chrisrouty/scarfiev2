import {Entity, model, property, belongsTo, hasMany, hasOne} from '@loopback/repository';
import {ProductImage} from './product-image.model';
import {Product} from './product.model';

@model()
export class Image extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
  })
  size?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  state: boolean;

  @hasMany(() => ProductImage)
  productImages: ProductImage[];

  @hasOne(() => Product, {keyTo: 'imageIdDefault'})
  product: Product;

  constructor(data?: Partial<Image>) {
    super(data);
  }
}

export interface ImageRelations {
  // describe navigational properties here
}

export type ImageWithRelations = Image & ImageRelations;
