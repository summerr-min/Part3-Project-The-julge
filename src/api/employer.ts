import { NoticeStatus } from '@/types/shop.types';
import instance from './axios';
import axios from 'axios';
import { NoticeBody, ShopBody } from './employer.types';

export async function getUserById(userId: string) {
  const res = await instance.get(`/users/${userId}`);
  return res.data;
}

//////

export const getShopById = (shopId: string) =>
  instance.get(`/shops/${shopId}`).then((res) => res.data);

export const getShopNoticeList = (shopId: string, params: object) =>
  instance.get(`/shops/${shopId}/notices`, { params }).then((res) => res.data);

export const postShopRegister = (shopData: ShopBody) =>
  instance.post(`/shops`, shopData).then((res) => res.data);

export const getShopNoticeById = (shopId: string, noticeId: string) =>
  instance.get(`/shops/${shopId}/notices/${noticeId}`).then((res) => res.data);

export const postShopNoticeRegister = (
  shopId: string,
  noticeData: NoticeBody
) =>
  instance.post(`/shops/${shopId}/notices`, noticeData).then((res) => res.data);

export const getShopApplicantList = (
  shopId: string,
  noticeId: string,
  params: object
) =>
  instance
    .get(`/shops/${shopId}/notices/${noticeId}/applications`, { params })
    .then((res) => res.data);

export const putShopNoticeById = (
  shopId: string,
  noticeId: string,
  noticeData: NoticeBody
) =>
  instance
    .put(`/shops/${shopId}/notices/${noticeId}`, noticeData)
    .then((res) => res.data);

export const putShopById = (shopId: string, shopData: ShopBody) =>
  instance.put(`/shops/${shopId}`, shopData).then((res) => res.data);

export const putShopNoticeDecideStatus = (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: NoticeStatus
) =>
  instance
    .put(`/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`, {
      status,
    })
    .then((res) => res.data);

// ----------------------------------------------------------------
// 이미지
export const postImagePresignedUrl = async (name: string) => {
  const response = await instance.post('/images', { name });
  return response.data;
};

export const uploadImageToS3 = async (presignedUrl: string, file: File) => {
  await axios.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
    transformRequest: [
      (data, headers) => {
        delete headers.Authorization;
        return data;
      },
    ],
  });
};
