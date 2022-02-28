import {AppBar, Box, Toolbar, Typography} from "@mui/material"


const Appbar = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
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
