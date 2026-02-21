export interface SingleResponse<T> {
  item: T;
}

export interface ApiLink {
  description: string;
  href: string;
  method: string;
  rel: string;
}

export interface ListResponse<T> {
  items: T[];
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  links: ApiLink[];
}
