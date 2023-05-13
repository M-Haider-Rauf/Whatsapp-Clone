import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",

    initialState: {
        uid: null,
        name: '',
        photoURL: null,
        about: '',
        loading: false
    },

    reducers: {
        login: (state, action) => {
            const payload = action.payload;
            
            state.uid = payload.uid;
            state.name = payload.name;
            state.photoURL = payload.photoURL;
            state.about = payload.about;
        },
        logout: state => {
            state.uid = null;
            state.name = '';
            state.photoURL = null;
            state.about = '';
        },
        changePhoto: (state, action) => {
            const payload = action.payload;
            state.photoURL = payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAbout: (state, action) => {
            state.about = action.payload;
        }
    }
});

export default userSlice.reducer;