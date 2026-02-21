import axios from 'axios';
import { useCallback, useState } from 'react';

function useShopAsync<T extends any[], R>(
  asyncFunction: (...args: T) => Promise<R>
) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<unknown>(null);

  const exec = useCallback(
    async (...args: T) => {
      setLoading(true);
      setError(null);

      try {
        const response = await asyncFunction(...args);
        setData(response);
        return response;
      } catch (e: unknown) {
        setError(e);
        if (axios.isAxiosError(e)) {
          const status = e.response?.status;
          const message =
            e.response?.data?.message || e.message || '문제가 발생했습니다.';
          console.error('API Error: status::::', status);
          console.error('API Error: message::::', message);
        } else {
          console.error('API normal Error: ', e);
        }

        throw e;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return {
    exec,
    isLoading,
    data,
    error,
    setData,
  };
}

export default useShopAsync;
