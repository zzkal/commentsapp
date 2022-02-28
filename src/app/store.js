import { configureStore } from '@reduxjs/toolkit'
import commentReducer from "../features/comments/CommentSlice";

export default configureStore({
    reducer: {
        comments: commentReducer,
    },
})