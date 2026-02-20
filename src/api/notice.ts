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

interface GetNoticeListProps {
  params: NoticeSearch;
}

function getSearchFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('search') ?? '').trim();
}

export async function getNoticeList(Props: GetNoticeListProps) {
  try {
    const search = getSearchFromUrl();
    const params = {
   ...Props.params,
   keyword: search ? search : undefined,
};

    const response = await instance.get('/notices', {
      ...Props,
      params,
      paramsSerializer: (paramObj) => {
        const params = new URLSearchParams();

        Object.keys(paramObj).forEach((key) => {
          const value = paramObj[key];

          if (value === undefined || value === null || value === '') return;

          if (Array.isArray(value) && key === 'address') {
            value.forEach((addressValue) => {
              params.append(key, String(addressValue));
            });
          } else {
            params.append(key, String(value));
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

interface ShopId {
  shopId: string;
}

interface NoticeId {
  noticeId: string;
}

interface ApplyData extends ShopId, NoticeId {}

interface PostApplyProps {
  authorization?: { token: string };
  data: ApplyData;
}

export async function postApply(Props: PostApplyProps) {
  try {
    const response = await instance.post(
      `/shops/${Props.data.shopId}/notices/${Props.data.noticeId}/applications`,
      null,
      {
        headers: { Authorization: `Bearer ${Props.authorization?.token}` },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

interface GetShopNoticeProps {
  url: ApplyData;
}

export async function getShopNotice(Props: GetShopNoticeProps) {
  try {
    const response = await instance.get(
      `/shops/${Props.url.shopId}/notices/${Props.url.noticeId}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

interface GetUserProps {
  userId: string;
}

export async function getUser(Props: GetUserProps) {
  try {
    const response = await instance.get(`/users/${Props.userId}`);
    return response;
  } catch (error) {
    return error;
  }
}