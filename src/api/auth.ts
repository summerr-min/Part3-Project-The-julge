import instance from './axios';

// 회원가입 API
export async function signUp(body: {
  email: string;
  password: string;
  type: 'employee' | 'employer';
}) {
  const res = await instance.post('/users', body);

  return res.data;
}

// 로그인 API
export async function signIn(body: { email: string; password: string }) {
  const res = await instance.post('/token', body);

  localStorage.setItem('accessToken', res.data.item.token);

  localStorage.setItem('userId', res.data.item.user.item.id);

  return res.data;
}
