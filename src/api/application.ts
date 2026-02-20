import instance from './axios';

// 공고지원
export async function applyNotice(shopId: string, noticeId: string) {
  return await instance.post(
    `/shops/${shopId}/notices/${noticeId}/applications`
  );
}

/**
 * 유저의 지원 목록 조회
 * @param userId
 * @param offset 조회 시작기준 페이지네이션
 * @param limit 조회 개수 기본값 10
 * @returns
 */
export async function getUserApplications(
  userId: string,
  offset: number,
  limit: number = 10
) {
  const response = await instance.get(`/users/${userId}/applications`, {
    params: { offset, limit },
  });
  return response.data;
}
