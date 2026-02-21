import Axios from 'axios';

const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    // 토큰이 유효할 때만 헤더에 추가
    if (token && token !== 'undefined' && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // API 명세서 - Bearer 토큰값
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 응답 인터셉터
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
