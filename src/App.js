import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./app/store";
import {Box} from "@mui/material"
import Appbar from "./features/nav/Appbar";
import Navbar from "./features/nav/Navbar";
import Approutes from "./features/nav/Approutes";
import {CommentList} from "./features/comments/CommentList";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Appbar/>
                <h1>Comments</h1>
                <BrowserRouter>
                    <Box>
                        <Approutes/>
                    </Box>
                    <Navbar/>
                </BrowserRouter>
            </div>
        </Provider>

    );
}

export default App;
