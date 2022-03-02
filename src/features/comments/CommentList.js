import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectComments, selectFavs, selectFindedComments, selectPending} from "./CommentSlice";
import {CommentCard} from "./CommentCard";
import {CircularProgress} from "@mui/material";


export const CommentList = () => {

    const comments = useSelector(selectComments);
    const findedcomments = useSelector(selectFindedComments);
    const favComments = useSelector(selectFavs);
    const pending = useSelector(selectPending);

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);


    if (findedcomments.length === 0) {
        return (
            <div>
                {(pending) ? <CircularProgress/> : comments.map(e => <CommentCard key={e.id} comment={e}/>)}
            </div>
        )
    } else {
        return (
            <div>
                {(pending) ? <CircularProgress/> : findedcomments.map(e => <CommentCard key={e.id} comment={e}/>)}
            </div>
        )
    }
}