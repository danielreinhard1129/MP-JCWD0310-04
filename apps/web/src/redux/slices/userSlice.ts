import { User } from '@/types/user.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  username: '',
  email: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      (state.id = action.payload.id),
        (state.username = action.payload.username),
        (state.email = action.payload.email),
        (state.role = action.payload.role);
    },
    logoutAction: (state) => {
      state.id = 0;
      (state.username = ''), (state.email = ''), (state.role = '');
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
