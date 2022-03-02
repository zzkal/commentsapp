import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {datacomments} from "../../data/comments";


const initialState = {
    comments: datacomments,
    pending: false,
    favcomments: [],
}

export const fetchCommentsAsync = createAsyncThunk(
    'comments/fetch',
    async () => {
        const response = await datacomments;
        // La valeur retournée esr la `fulfilled` action payload
        return response;
    }
);


export const commentSlice = createSlice({
        name: 'comments',
        initialState,
        reducers: {
            deleteComment(state, action) {
                const comments = state.comments;
                const commentToDelete = state.comments.findIndex(i => i.id === action.payload.id);
                comments.splice(commentToDelete, 1);
                state.comments = comments;
            },
            addLike(state, action) {
                const comments = state.comments;
                const commentToAddLike = comments.findIndex(i => i.id === action.payload.id);
                comments[commentToAddLike].likes++;
                state.comments = comments;


            },
            addToFav(state, action){
                const comments = state.comments;
                const commentAddToFavorite = comments.findIndex(i => i.id === action.payload.id);
                state.favcomments.push(comments[commentAddToFavorite]);

            },
            // ExtraReducers (Asynchrone)
            extraReducers: (builder) => {
                builder
                    .addCase(fetchCommentsAsync, (state) => {
                        console.log("Loading movies...");
                    })
                    .addCase(fetchCommentsAsync().fulfilled, (state, action) => {
                        state.comments = action.payload;
                    });
                // Il faudrait gérer l'erreur dans le cas d'une vraie requête !
            },


        }
    }
);

export const selectComments = (state) => state.comments.comments;
export const selectPending = (state) => state.comments.pending;
export const selectFavs = (state) => state.comments.favcomments;

export const {deleteComment, addLike,addToFav} = commentSlice.actions;
export default commentSlice.reducer;