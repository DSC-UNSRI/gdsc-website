import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import EventDetailsWithDay from "./Pages/EventDetailsWithDay";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='events/:eventId' element={<EventDetails/>}/>
                <Route path='events/:eventId/:eventId' element={<EventDetailsWithDay/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
