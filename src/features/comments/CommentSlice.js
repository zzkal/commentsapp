import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {datacomments} from "../../data/comments";
import {comments_complete} from "../../data/hp_critics";


const initialState = {
    comments: [],
    pending: false,
    favcomments: [],
    findcomments: [],
    exist: false,
    coloricon: "black",
    coloriconfav: "black",
}

function requestSimulation() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(datacomments);
        }, 500);
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
                switch (state.coloricon) {
                    case "black":
                        action.payload.target.style.color = "green"
                        comments[commentToAddLike].likes++;
                        state.coloricon = "green";
                        break;
                    case "green":
                        action.payload.target.style.color = "black"
                        comments[commentToAddLike].likes--;
                        state.coloricon = "black";
                        break;
                }
                state.comments = comments;
            },
            addToFav(state, action) {
                const comments = state.comments;
                const commentAddToFavorite = comments.findIndex(i => i.id === action.payload.id);
                if (state.coloriconfav === "black") {
                    action.payload.target.style.color = "pink";
                    state.coloriconfav = "pink";
                    state.favcomments.push(comments[commentAddToFavorite]);
                } else if(state.coloriconfav === "pink"){
                    action.payload.target.style.color = "black";
                    state.coloriconfav = "black";
                    state.favcomments.splice(commentAddToFavorite, 1);
                }
            },
            searchComment(state, action) {
                //Reg expresion
                let regExp = new RegExp(`^${action.payload.input}`, 'gi');
                //array of all comments
                const allComments = state.comments;
                //clear find array
                state.findcomments = [];
                //search existance

                allComments.map((e) => {
                    if (regExp.test(e.name) && action.payload.input !== "") {
                        state.findcomments.push(e);
                    }
                });
                //something wrote?
                if (action.payload.length === 0) {
                    state.exist = false;
                } else {
                    state.exist = true;
                }
            },
            // ExtraReducers (Asynchrone)

        },
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
);

export const selectComments = (state) => state.comments.comments;
export const selectPending = (state) => state.comments.pending;
export const selectFavs = (state) => state.comments.favcomments;
export const selectFindedComments = (state) => state.comments.findcomments;
export const selectExist = (state) => state.comments.exist;

export const {deleteComment, addLike, addToFav, searchComment} = commentSlice.actions;
export default commentSlice.reducer;