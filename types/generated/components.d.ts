import type { Schema, Struct } from '@strapi/strapi';

export interface ColorsColor extends Struct.ComponentSchema {
  collectionName: 'components_colors_colors';
  info: {
    displayName: 'color';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'colors.color': ColorsColor;
      'seo.seo': SeoSeo;
    }
  }
}
