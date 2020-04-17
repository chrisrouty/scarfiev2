import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProductImage} from './product-image.model';

@model()
export class Product extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  create_date?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  state: boolean;

  @property({
    type: 'number',
    required: true,
  })
  likes_count: number;

  @hasMany(() => ProductImage)
  productImages: ProductImage[];

  @property({
    type: 'number',
  })
  imageIdDefault?: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
