import {BottomNavigation, BottomNavigationAction, Box, Paper} from "@mui/material"
import {Book, Comment, Favorite} from "@mui/icons-material"
import {Link} from "react-router-dom"
import {pink} from "@mui/material/colors";

const Navbar = () => {
    return(
        <Paper sx={{position: "fixed", bottom:0, left: 0, right: 0}} elevation={4}>
            <BottomNavigation
                showLabels
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
            >
                <BottomNavigationAction component={Link} to="/comments" label="Comments" icon={<Comment/>} />
                <BottomNavigationAction component={Link} to="/favs" label="Favs" icon={<Favorite />} sx={{ color: pink[500] }} />
            </BottomNavigation>
        </Paper>
    );
}
export default Navbar
