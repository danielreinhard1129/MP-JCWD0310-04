import { Category } from '@/types/category.type';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategory = async () => {
    try {
      const { data } = await axios.get<Category[]>(
        'http://localhost:8000/api/events/create',
      );
      setCategories(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah ke toast
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return {
    categories,
    refetch: getCategory,
  };
};

export default useGetCategory;
