import { User } from '@/types/user.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  userName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      (state.id = action.payload.id),
        (state.userName = action.payload.userName),
        (state.email = action.payload.email);
    },
    logoutAction: (state) => {
      state.id = 0;
      (state.userName = ''), (state.email = '');
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
