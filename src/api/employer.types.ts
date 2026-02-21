export interface ShopBody {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface NoticeBody {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export interface ApplicantStatusBody {
  status: string;
}
