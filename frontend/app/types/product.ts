export interface ProductVariant {
  id: string;
  label: string;
  rolls?: number;
  images: string[];
}

export interface ProductSpecification {
  pack?: string;
  sheets?: string;
  pulls?: string;
  ply?: string;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  short_desc: string;
  description: string;
  image: string;
  highlights: string[];
  specifications: ProductSpecification[];
  variants: ProductVariant[];
}
