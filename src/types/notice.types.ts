import { Address } from './address.types';

export interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
}

export interface Item {
  id: string;
  currentUserApplication?: {
    item: CurrentUserApplication;
  };
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: {
    item: Shop;
    href: string;
  };
}

export interface Notice {
  item: Item;
  links: Link[];
}

export interface NoticeData {
  address: Address[];
  count: number;
  hasNext: boolean;
  items: Notice[];
  limit: number;
  links: Link[];
  offset: number;
}

export type Status = 'pending' | 'accepted' | 'rejected' | 'cancelled';

export interface CurrentUserApplication {
  id: string;
  status: Status;
  createdAt: string;
}
