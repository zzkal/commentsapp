import {useDispatch} from "react-redux"

import {Button, Card, CardContent, Stack, Typography} from "@mui/material"
import CardActions from '@mui/material/CardActions';
import {Delete, Favorite, PlusOne, ThumbDown, ThumbUp} from "@mui/icons-material"
import {addLike, addToFav, deleteComment, disLike} from "./CommentSlice";
import {pink} from "@mui/material/colors";
import {Link} from "react-router-dom";
import {useState} from "react";


export const CommentCard = (props) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        // dispatch Delete action
        dispatch(
            deleteComment({
                id: props.comment.id,
            })
        )
    }

    const handleAddLike = (event) => {

        dispatch(
            addLike({
                id: props.comment.id,
                target: event.target,
            })
        )
    }

    const handleDisLike = (event) => {

        dispatch(
            disLike({
                id: props.comment.id,
                target: event.target,
            })
        )
    }

    const handleAddFav = (e) => {
        e.target.style.color = 'pink';
        dispatch(
            addToFav({
                id: props.comment.id,
                target: e.target,
            })
        )
    }

    const handleShowDes = () => {

    }


    return (
        <Card sx={{marginBottom: 4}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.comment.book}
                </Typography>
                <Typography variant="h6" component="div">
                    <p>{props.comment.name}</p>
                </Typography>
                <p>{props.comment.rating}</p>
                <Typography fontWeight={700}>
                    <p>{props.comment.likes} likes</p>
                </Typography>
                <Typography fontWeight={700}>
                    <p>{props.comment.dislikes} dislikes</p>
                </Typography>
                <p>{props.comment.stars_given}</p>
                <p>{props.comment.date}</p>
                <Stack direction="row" spacing={2}>
                    <Delete sx={{fontSize: 40}} color={"error"} onClick={handleDelete}
                    />
                    <ThumbUp sx={{fontSize: 40}} onClick={(e) => handleAddLike(e)}/>
                    <ThumbDown sx={{fontSize: 40}} onClick={(e) => handleDisLike(e)}/>
                    <Favorite sx={{fontSize: 40}} onClick={(e) => handleAddFav(e)}/>
                    <CardActions>
                        <Button size="small" component={Link} to="/desc">Learn More</Button>
                    </CardActions>
                </Stack>
            </CardContent>
        </Card>
    )

}
export default CommentCard