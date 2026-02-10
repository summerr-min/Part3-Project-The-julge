import instance from './axios';

// 내 정보 조회 API(GET)
export async function getMyProfile(userId: string) {
  const res = await instance.get(`/users/${userId}`);
  console.log('res.data:' + res.data);
  return res.data;
}

// 내 정보 수정 API(PUT)
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
// 현재 사용자가 알바생인지 확인
export const isEmployee = () => {
  const saveProfile = localStorage.getItem('userProfile');
  //console.log('saveProfile', saveProfile);
  if (!saveProfile) {
    return false;
  }
  const profile = JSON.parse(saveProfile);
  console.log('profile', profile);
  return profile.type === 'employee';
};
