import instance from './axios';

export type UserType = 'employee' | 'employer';

export type UserResponse = {
  item: {
    id: string;
    email: string;
    type: UserType;
    name?: string;
    phone?: string;
    address?: string;
    bio?: string;
  };
};

export async function getUser(userId: string) {
  const res = await instance.get<UserResponse>(`/users/${userId}`);
  return res.data.item;
}
