import { Shop } from './notice.types';

export const SEOUL_DISTRICTS = [
  '서울시 종로구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 강남구',
  '서울시 송파구',
  '서울시 강동구',
] as const;

export type SeoulAddress = (typeof SEOUL_DISTRICTS)[number];

// 사용자 기본 정보 타입 (내 정보 조회 및 수정)
export interface UserInfo {
  id: string;
  email: string;
  type: 'employee';
  name?: string;
  phone?: string;
  address?: SeoulAddress | string;
  bio?: string;
}

// 프로필 수정 요청 시
export interface UpdateProfileRequest {
  name: string;
  phone: string;
  address: SeoulAddress | string;
  bio: string;
}

//공통 API 응답 타입
export interface ApiResponse<T> {
  item: T;
  links?: any[]; // api 명세서에 정의된 내용이 없음.
}
// 공고 상세 페이지에 필요한 사용자 정보 타입
export type UserType = 'employee' | 'employer';

export interface Item {
  id: string;
  email: string;
  type: UserType;
  name: string;
  phone: string;
  address: string;
  bio: string;
  shop: string | null;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
  query?: {
    offset: number | 'undefined';
    limit: number | 'undefined';
  };
}

export interface UserData {
  item: Item;
  links: Link[];

/**
 * 유저의 개별 지원 내역 타입
 * GET /users/{user_id}/applications 응답 구조
 */
export interface UserApplicationItem {
  item: {
    id: string;
    status: 'pending' | 'accepted' | 'rejected' | 'canceled';
    createdAt: string;
    shop: {
      item: Shop;
      href: string;
    };
    notice: {
      item: {
        id: string;
        hourlyPay: number;
        description: string;
        startsAt: string;
        workhour: number;
        closed: boolean;
      };
    };
  };
}

// 지원 목록 API 전체 응답 타입
export interface UserApplicationResponse {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: UserApplicationItem[];
}
