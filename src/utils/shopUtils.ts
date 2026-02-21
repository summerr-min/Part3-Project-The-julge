import { SyntheticEvent } from 'react';
import myShopDefaultImg from '@/assets/images/default_myshop.png';
import { ShopNoticeR } from '@/types/shop.types';

export const handleImgError = (
  e: SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string = myShopDefaultImg
) => {
  const target = e.currentTarget;

  target.onerror = null;

  target.src = fallbackSrc;
  target.style.width = '100%';
  target.style.objectFit = 'none';
};

export const isExpiredTime = (startTime: string): boolean => {
  const now = new Date();
  const targetTime = new Date(startTime);
  return now > targetTime;
};

export const getStatusNotice = (noticeData: ShopNoticeR): string => {
  const now = new Date();
  const startDate = new Date(noticeData.item.startsAt);

  if (now > startDate) return 'expired';
  if (noticeData.item.closed) return 'closed';

  return '';
};

export const formatToComma = (value: string): string => {
  const onlyNumbers = value.replace(/[^\d]/g, '');
  return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPrice = (value: string): string => {
  const rawValue = value.replace(/,/g, '');
  const onlyNumbers = rawValue.replace(/[^0-9]/g, '');
  const noFirstZeros = onlyNumbers.replace(/^0+(?=\d)/, '');
  return noFirstZeros.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
