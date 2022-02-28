import {Routes, Route} from "react-router-dom"
import {CommentList} from "../comments/CommentList";
import {CommentFavList} from "../comments/CommentFavList";

const Approutes = () => {
    return(
        <Routes>
            <Route path={"/comments"} element={<CommentList/>} />
            <Route path={"/favs"} element={<CommentFavList/>} />
            <Route path={"/desc"} element={<></>} />
            <Route path={"*"} element={<CommentList />} />
        </Routes>
    )
}

export default Approutes
