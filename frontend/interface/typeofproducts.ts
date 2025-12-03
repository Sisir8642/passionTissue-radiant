type TissueProduct = {
  id: string;
  name: string;
  category: "tissue";
  shortDesc: string;
  price: string;
  image: string;
  pack: string;
  sheets: string;
  pulls: string;
  ply: string;
  highlights: string[];
  description: string;
  size?: undefined;
  variants?: undefined;
  ingredients?: undefined;
};

type LotionProduct = {
  id: string;
  name: string;
  category: "lotion";
  shortDesc: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  size: string;
  variants?: string[];
  ingredients?: string[];
};

type Product = TissueProduct | LotionProduct;
export default Product;