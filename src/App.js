import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='events/:eventId' element={<EventDetails/>}/>
                <Route path='about' element={<About/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
