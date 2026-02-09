import instance from './axios';

export type UserType = 'employee' | 'employer';

export async function fetchCurrentUser(userId: string) {
  return instance.get(`/users/${userId}`).then((res) => res.data);
}
