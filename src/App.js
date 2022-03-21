import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Members from "./Pages/Members";
import EventDetails from "./Pages/EventDetails";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='members' element={<Members/>}/>
                <Route path='events/:eventId' element={<EventDetails/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
