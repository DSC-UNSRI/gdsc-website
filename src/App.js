import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Members from "./Pages/Members";
import EventDetails from "./Pages/EventDetails";
import NotFound from "./Pages/NotFound";
import ContactUs from "./Pages/Contactus";
import Footer from "./Components/Footer";
import Community from "./Pages/Community";
import Recordings from "./Pages/Recordings";
import RecordingVideo from "./Pages/RecordingVideo";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='members' element={<Members/>}/>
                <Route path='community' element={<Community/>}/>
                <Route path='events' element={<Events/>}/>
                <Route path='events/:eventId' element={<EventDetails/>}/>
                <Route path='ContactUs' element={<ContactUs/>}/>
                <Route path='recordings' element={<Recordings/>}/>
                <Route path='recordingvideo' element={<RecordingVideo/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
