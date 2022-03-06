import {useDispatch} from "react-redux"

import {Button, Card, CardContent, Stack, Typography} from "@mui/material"
import CardActions from '@mui/material/CardActions';
import {Delete, Favorite, PlusOne, ThumbDown, ThumbUp} from "@mui/icons-material"
import {addLike, addToFav, deleteComment,} from "./CommentSlice";
import {pink} from "@mui/material/colors";
import {Link} from "react-router-dom";

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

    const handleShowDes = () =>{

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
                    <Delete  sx={{fontSize:40}} color={"error"} onClick={handleDelete}/>
                    <ThumbUp sx={{fontSize: 40}} onClick={handleAddLike}/>
                    <ThumbDown sx={{fontSize: 40}}/>
                    <Favorite sx={{fontSize: 40}} onClick={handleAddFav}/>
                    <CardActions>
                        <Button size="small" component={Link} to="/desc">Learn More</Button>
                    </CardActions>
                </Stack>
            </CardContent>
        </Card>
    )

}
export default CommentCard