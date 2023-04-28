import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            const payload = action.payload;
            state.user = payload.user;
        },
        logout: state => {
            state.user = null;
        }
    }
});

export default usersSlice.reducer;