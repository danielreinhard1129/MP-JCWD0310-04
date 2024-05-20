import { User } from '@/types/user.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Omit<User, 'password'> = {
  id: 0,
  username: '',
  email: '',
  role: '',
  referralCode: '',
  point: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      (state.id = action.payload.id),
        (state.username = action.payload.username),
        (state.email = action.payload.email),
        (state.role = action.payload.role),
        (state.referralCode = action.payload.referralCode),
        (state.point = action.payload.point);
    },
    logoutAction: (state) => {
      state.id = 0;
      (state.username = ''),
        (state.email = ''),
        (state.role = ''),
        (state.referralCode = ''),
        (state.point = 0);
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
