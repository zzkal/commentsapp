import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import {red} from "@mui/material/colors";


const Appbar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color={"error"}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Commentaires
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar
