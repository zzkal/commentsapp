import {useDispatch} from "react-redux"

import Box from '@mui/material/Box';
import {Button, Card, CardContent, Stack, Typography} from "@mui/material"
import {Delete, Favorite, PlusOne, ThumbUp} from "@mui/icons-material"
import {addLike, addToFav, deleteComment,} from "./CommentSlice";

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
    const handleAddLike = () => {
        dispatch(
            addLike({
                id: props.comment.id,
            })
        )
    }
    const handleAddFav = () => {
        dispatch(
            addToFav({
                id: props.comment.id,
            })
        )
    }


    return (
        <Card sx={{marginBottom: 4}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.comment.book}
                </Typography>
                <p>{props.comment.name}</p>
                <p>{props.comment.rating}</p>
                <p>{props.comment.likes} <ThumbUp color={"success"} fontSize="small"/></p>
                <p>{props.comment.stars_given}</p>
                <p>{props.comment.date}</p>
                <Stack direction="row" spacing={2}>
                    <Button startIcon={<Delete/>} variant={"contained"} color={"error"}
                            onClick={handleDelete}>Delete</Button>
                    <Button variant="contained" color="success" onClick={handleAddLike}>Like</Button>
                    <Favorite onClick={handleAddFav}/>
                </Stack>
            </CardContent>
        </Card>
    )

}
export default CommentCard