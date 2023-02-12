export interface ICard {
  mal_id: number;
  images: Images;
  title: string;
  genres?: Genre[];
  favorites?: number;
  score?: number;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
