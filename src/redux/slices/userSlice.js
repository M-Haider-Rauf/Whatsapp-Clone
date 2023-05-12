import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: {
        userID: null
    },
    reducers: {
        login: (state, action) => {
            const payload = action.payload;
            state.userID = payload.user;
        },
        logout: state => {
            state.userID = null;
        }
    }
});

export default usersSlice.reducer;