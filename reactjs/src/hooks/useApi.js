import { useMemo } from 'react';
import axios from 'axios';

const useApi = baseURL => {
  const api = useMemo(() => {
    const apiItem = axios.create({
      baseURL: baseURL || process.env.REACT_APP_API_BASE_URL,
    });

    return apiItem;
  }, [baseURL]);

  return api;
};

export default useApi;
