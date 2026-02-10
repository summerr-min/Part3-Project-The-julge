import instance from './axios';

export type UserType = 'employee' | 'employer';

export async function fetchCurrentUser(userId: string) {
  const res = await instance.get(`/users/${userId}`);
  return res.data;
}
