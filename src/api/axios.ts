import Axios from 'axios';

const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    // 테스트 로그 (추후 삭제)
    console.log('현재 로컬스토리지 토큰:', token);

    // 토큰 존재 시 모든 요청 헤더에 Authorization 항목 추가
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // API 명세서 - Bearer 토큰값
      // 테스트 로그 (추후 삭제)
      console.log('최종 요청 헤더:', config.headers.Authorization);
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
