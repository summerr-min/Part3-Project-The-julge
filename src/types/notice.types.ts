export interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalWage: number;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
}

export interface Item {
  id: string;
  wage: number;
  startsAt: string;
  workHour: number;
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
