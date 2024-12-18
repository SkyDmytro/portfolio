import { useState } from 'react';

/**
 * A hook for fetching data from a URL.
 * @param {string} url The URL to fetch from.
 * @param {RequestInit} [options] The options for the fetch call.
 * @returns {{data: any, loading: boolean, error: string | null, fetchData: (body: any) => void}} A response object with the data, loading state, error message, and a function to fetch the data.
 */
export function useFetchData<T>(
  url: string,
  options: RequestInit = {}
): {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (body?: any) => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (body: any) => {
    console.log(body);
    setLoading(true);
    setError(null);
    const fullUrl = import.meta.env.VITE_BASE_API_URL + url;

    try {
      console.log(options);
      const response = await fetch(fullUrl, {
        ...options,
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(body) || undefined,
      });
      // console.log(response);
      if (!response.ok) {
        // console.log(response);
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (err) {
      console.log(err);
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
