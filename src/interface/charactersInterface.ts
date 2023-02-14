export interface Characters {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

export interface Character {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url?: string;
}

export interface VoiceActor {
  person: Person;
  language: string;
}

export interface Person {
  mal_id: number;
  url: string;
  images: Images2;
  name: string;
}

export interface Images2 {
  jpg: Jpg2;
}

export interface Jpg2 {
  image_url: string;
}

export interface Root {
  pagination: Pagination;
  data: Daum[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface Daum {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
  name_kanji?: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export interface CharacterDetails {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export interface Appeared {
  role: string;
  anime: Anime;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}

export interface VoiceActor {
  language: string;
  person: Person;
}
