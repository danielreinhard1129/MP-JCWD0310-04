import { useToast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { loginAction } from '@/redux/slices/userSlice';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';

interface KeepLoginResponse {
  message: string;
  data: User;
}

const useKeepLogin = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const { data } =
        await axiosInstance.get<KeepLoginResponse>('/auth/keep-login');

      dispatch(loginAction(data.data));
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   toast({
      //     description: error?.response?.data?.message || 'An error occurred',
      //   });
      // }
    }
  };
  return { keepLogin };
};
export default useKeepLogin;
