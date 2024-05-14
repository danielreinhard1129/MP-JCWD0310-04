import { User } from '@/types/user.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  username: '',
  email: '',
  role: '',
  referral: '',
  points: 0,
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
        (state.referral = action.payload.referral),
        (state.points = action.payload.points);
    },
    logoutAction: (state) => {
      state.id = 0;
      (state.username = ''),
        (state.email = ''),
        (state.role = ''),
        (state.referral = ''),
        (state.points = 0);
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
