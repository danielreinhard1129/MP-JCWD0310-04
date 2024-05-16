import { Reward } from '@/types/reward.type';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetReward = (id: number) => {
  const [data, setData] = useState<Reward | null>(null);

  const getReward = async () => {
    try {
      const { data } = await axios.get<Reward>(
        `http://localhost:8000/api/rewards/${id}`,
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
    getReward();
  }, [data]);
  return {
    reward: data,
    refetch: getReward,
  };
};

export default useGetReward;
