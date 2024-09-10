import type { Struct, Schema } from '@strapi/strapi';

export interface ProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'size';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    priceChange: Schema.Attribute.Decimal;
  };
}

export interface ProductItems extends Struct.ComponentSchema {
  collectionName: 'components_product_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
    note: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.size': ProductSize;
      'product.items': ProductItems;
    }
  }
}
