import instance from './axios';

// 내 정보 조회 API
export async function getMyProfile(userId: string) {
  const res = await instance.get(`/users/${userId}`);
  console.log('res.data:' + res.data);
  return res.data;
}

// 내 정보 수정 API
export async function updataMyProfile(
  userId: string,
  body: {
    name: string;
    phone: string;
    address: string;
    bio: string; // 내소개
  }
) {
  const res = await instance.put(`users/${userId}`, body);

  return res.data;
}
