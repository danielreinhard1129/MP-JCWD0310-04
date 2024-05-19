import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetCoupon = (id: number) => {
  const [data, setData] = useState<Coupon | null>(null);

  const getCoupon = async () => {
    try {
      const { data } = await axios.get<Coupon>(
        `http://localhost:8000/api/coupons/${id}`,
      );
      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah ke toast
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getCoupon();
  }, []);
  return {
    reward: data,
    refetch: getCoupon,
  };
};

export default useGetCoupon;
