export interface Review {
  data: ReviewData;
  meta: Meta;
}

export interface ReviewData {
  id: number;
  attributes: ReviewAttributes;
}

export interface ReviewAttributes {
  title: string;
  content: Content[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
}

export interface Content {
  type: string;
  children: Child[];
}

export interface Child {
  text: string;
  type: string;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Meta {}
