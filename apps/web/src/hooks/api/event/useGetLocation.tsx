import { Location } from '@/types/location.type';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetLocation = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const getLocation = async () => {
    try {
      const { data } = await axios.get<Location[]>(
        'http://localhost:8000/api/events/locations',
      );
      setLocations(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah ke toast
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return {
    locations,
    refetch: getLocation,
  };
};

export default useGetLocation;
