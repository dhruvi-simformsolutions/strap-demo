import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressTest extends Schema.Component {
  collectionName: 'components_test123_tests';
  info: {
    displayName: 'address';
    icon: 'folder';
    description: '';
  };
  attributes: {
    address: Attribute.Text;
    city: Attribute.String;
    state: Attribute.String;
    country: Attribute.String;
    pincode: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.test': AddressTest;
    }
  }
}
