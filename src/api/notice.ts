import instance from './axios';
import { Address } from '@/types/address.types';

type SortType = 'time' | 'pay' | 'hour' | 'shop';

interface NoticeSearch {
  offset: number;
  limit: number;
  address?: Address[];
  keyword?: string;
  startsAtGte?: string;
  wageGte?: number;
  sort?: SortType;
}

interface Props {
  params: NoticeSearch;
}

export async function getNoticeList(Props: Props) {
  try {
    const response = await instance.get('/notices', {
      ...Props,
      paramsSerializer: (paramObj) => {
        const params = new URLSearchParams();

        Object.keys(paramObj).forEach((key) => {
          const value = paramObj[key];
          if (Array.isArray(value) && key === 'address') {
            value.forEach((addressValue) => {
              params.append(key, addressValue);
            });
          } else {
            params.append(key, value);
          }
        });

        return params.toString();
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
