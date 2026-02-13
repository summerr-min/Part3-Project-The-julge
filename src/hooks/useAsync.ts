import { useCallback, useState } from 'react';

function useAsync<T extends any[], U>(
  asyncFunction: (...args: T) => Promise<U>
): { execute: (...args: T) => Promise<U>; loading: boolean } {
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    async (...args: T) => {
      setLoading(true);

      try {
        const response = await asyncFunction(...args);
        return response;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return { execute, loading };
}

export default useAsync;
