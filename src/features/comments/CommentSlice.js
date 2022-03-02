import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {datacomments} from "../../data/comments";


const initialState = {
    comments: datacomments,
    pending: false,
    favcomments: [],
    findcomments: [],
}

export const fetchCommentsAsync = createAsyncThunk(
    'comments/fetch',
    async () => {
        // La valeur retournée est la `fulfilled` action payload
        return await datacomments;
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
            addToFav(state, action) {
                const comments = state.comments;
                const commentAddToFavorite = comments.findIndex(i => i.id === action.payload.id);
                state.favcomments.push(comments[commentAddToFavorite]);

            },
            searchComment(state, action){
                let regExp = new RegExp(`^${action.payload.input}`,'ig')
                const allComments = state.comments;
                state.findcomments = [];
                allComments.map((e) => {
                    if(regExp.test(e.name) && action.payload.input != ""){
                        state.findcomments.push(e);
                    }
                });

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
export const selectFindedComments = (state) => state.comments.findcomments;

export const {deleteComment, addLike, addToFav, searchComment} = commentSlice.actions;
export default commentSlice.reducer;