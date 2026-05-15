import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        clearSession: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        }
    }
})

export default authSlice.reducer
export const { setSession, clearSession } = authSlice.actions