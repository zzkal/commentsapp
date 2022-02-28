import {useDispatch} from "react-redux"

import {Card, CardContent, Stack, Typography} from "@mui/material";


export const CommentDescription = (props) =>{
    const dispatch = useDispatch()

    return(
        <Card sx={{marginBottom: 4}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.comment.book}
                </Typography>
                <p>{props.comment.description}</p>
            </CardContent>
        </Card>
    )
}