import instance from './axios';

// 유저의 알림 목록 조회
export const getUserAlerts = async (userId: string, offset = 0, limit = 10) => {
  const response = await instance.get(`/users/${userId}/alerts`, {
    params: { offset, limit },
  });
  return response.data;
};

// 알림 읽음 처리
export const readAlert = async (userId: string, alertId: string) => {
  const response = await instance.put(`/users/${userId}/alerts/${alertId}`);
  return response.data;
};
