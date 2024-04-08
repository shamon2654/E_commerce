import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticate: false,
  loading: false,
  user: null,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    LoadUserRequest(state,action) {
      state.loading = true
    },
    LoadUserSucces(state, action) {
      state.isAuthenticate = true
      state.loading = false
      state.user = action.payload
    },
    LoadingFail(state, action) {
      state.loading = false
      state.error = action.payload
      state.isAuthenticate = false
    },
    ClearErrors(state, action) {
      state.error = null
    },
  },
})


export const { LoadUserRequest, LoadUserSucces, LoadingFail, ClearErrors } = userSlice.actions;

export default userSlice.reducer;