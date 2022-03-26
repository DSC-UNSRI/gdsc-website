import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import Community from "./Pages/Community";
import Recordings from "./Pages/Recordings";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='community' element={<Community/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='events/:eventId' element={<EventDetails/>}/>
                <Route path='recordings' element={<Recordings/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
