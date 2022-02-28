import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectComments, selectFavs, selectPending} from "./CommentSlice";   
import {CircularProgress} from "@mui/material";
import {CommentFavCard} from "./CommentFavCard";



export const CommentFavList = () => {

    const favComments = useSelector(selectFavs);
    const pending = useSelector(selectPending);

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);


    return(
        <div>
            {(pending)?<CircularProgress/>:favComments.map(e => <CommentFavCard key={e.id} comment={e}/>)}
        </div>

    )
}