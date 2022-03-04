import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {datacomments} from "../../data/comments";
import {comments_complete} from "../../data/hp_critics";


const initialState = {
    comments: [],
    pending: false,
    favcomments: [],
    findcomments: [],
    exist: false,
}

function requestSimulation() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                result: comments_complete
            });
        }, 2000);
    });
}

export const fetchCommentsAsync = createAsyncThunk(
    'comments/fetch',
    async () => {
        // La valeur retournée est la `fulfilled` action payload
        const response = await requestSimulation();
        return response;
    }
);

export const fetchCommentBySearch = createAsyncThunk(
    'comments/fetchCommentBySearch',
    async (input,lengthContent) => {

        //Reg expresion
        let regExp = new RegExp(`^${input}`, 'gi')
        //array of all comments
        const allComments = this.state.comments;
        //clear find array
        this.state.findcomments = [];
        //search existance

        const response = await allComments.map((e) => {
            if (regExp.test(e.name) && input != "") {
                this.state.findcomments.push(e);
            }
        });
        //something wrote?
        if (lengthContent === 0) {
            this.state.exist = false;
        } else {
            this.state.exist = true;
        }
        console.log(response);
        return response;

    });

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
            searchComment(state, action) {

            },
            // ExtraReducers (Asynchrone)
            extraReducers: (builder) => {
                builder
                    .addCase(fetchCommentsAsync.pending, (state) => {
                        console.log("Loading movies...");
                        state.pending = true;
                    })
                    .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
                        state.pending = false;
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
export const selectExist = (state) => state.comments.exist;

export const {deleteComment, addLike, addToFav, searchComment} = commentSlice.actions;
export default commentSlice.reducer;