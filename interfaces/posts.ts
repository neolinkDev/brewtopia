export interface Posts {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  content: Content[];
  url: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
}

export interface Content {
  type: ContentType;
  children: Child[];
}

export interface Child {
  text: string;
  type: ChildType;
}

export enum ChildType {
  Text = 'text',
}

export enum ContentType {
  Paragraph = 'paragraph',
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jpg = '.jpg',
}

export interface Formats {
  small: Medium;
  medium: Medium;
  thumbnail: Medium;
}

export interface Medium {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
