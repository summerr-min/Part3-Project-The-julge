import { ShopBody } from '@/api/employer.types';

export type NoticeStatus = 'accepted' | 'rejected' | 'canceled';

export interface UserItem {
  id: string;
  email: string;
  type: string;
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export interface User {
  item: UserItem;
  href: string;
}

export interface ShopInfo {
  address1: string;
  address2: string;
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  originalHourlyPay: number;
  user: User;
}

export interface ShopNoticeR {
  item: {
    closed: boolean;
    description: string;
    hourlyPay: number;
    id: string;
    startsAt: string;
    workhour: number;
  };
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface Shop {
  item: ShopItem;
  href: string;
}

export interface ShopNotice {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface Notice {
  item: NoticeItem;
  href: string;
}

export interface ApplicantItem {
  item: {
    id: string;
    status: string;
    createdAt: string;
    user: User;
    shop: Shop;
    notice: Notice;
  };
  links: [];
}

/////////////////////////////////

export interface ApplicantListParams {
  offset: number;
  limit: number;
}

export interface ShopFormData extends ShopBody {
  previewUrl?: string | null;
}
