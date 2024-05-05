import { useState, useEffect } from 'react';

// returns array of the product names
// ex: ["elma", "armut", ...]
function useGetProductNames() {
  const [productNames, setProductNames] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:9090/api';
      try {
        const res = await fetch(`${url}/getyil/2024`);
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        const fetchedTypes = await res.json();
        setProductNames(fetchedTypes);
      } catch (error) {
        setError(String(error));
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return { productNames, error };
}

export default useGetProductNames;
