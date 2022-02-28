import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectComments, selectFavs, selectPending} from "./CommentSlice";
import {CommentCard} from "./CommentCard";
import {CircularProgress} from "@mui/material";



export const CommentList = () => {

    const comments = useSelector(selectComments);
    const favComments = useSelector(selectFavs);
    const pending = useSelector(selectPending);

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);


    return(
        <div>
            {(pending)?<CircularProgress/>:comments.map(e => <CommentCard key={e.id} comment={e}/>)}
        </div>

    )
}