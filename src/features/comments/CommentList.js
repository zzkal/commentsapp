import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchCommentBySearch, fetchCommentsAsync,
    selectComments,
    selectExist,
    selectFavs,
    selectFindedComments,
    selectPending
} from "./CommentSlice";
import {CommentCard} from "./CommentCard";
import {CircularProgress, Stack} from "@mui/material";


export const CommentList = () => {

    const comments = useSelector(selectComments);
    const findedcomments = useSelector(selectFindedComments);
    const favComments = useSelector(selectFavs);
    const pending = useSelector(selectPending);
    const exist = useSelector(selectExist);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCommentsAsync())
    }, []);


    if (findedcomments.length === 0 && exist === false) {
        return (
            <div>
                {(pending) ? <CircularProgress/> : comments.map(e => <CommentCard key={e.id} comment={e}/>)}
            </div>
        )
    } else if (findedcomments.length !== 0 && exist === true) {
        return (
            <div>
                {(pending) ? <CircularProgress/> : findedcomments.map(e => <CommentCard key={e.id} comment={e}/>)}
            </div>
        )
    } else {
        return (
            <div>
                <h1>No results...</h1>
            </div>



        )
    }

}