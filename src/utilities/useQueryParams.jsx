import { useState, useEffect } from 'react';

export function useQueryParams() {
  const [queryParams, setQueryParams] = useState({});

  const updateParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    for (let [key, value] of urlParams) {
      params[key] = value.split(',');
    }
    setQueryParams(params);
  };

  useEffect(() => {
    updateParams();
    const handlePopState = () => updateParams();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return queryParams;
}