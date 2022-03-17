import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="w-screen flex justify-between items-center shadow-md px-12 py-2">
            <div className="flex items-center">
                <img src="/gdsc-unsri-logo.png" alt="gdsc-unsri-logo" className="w-16 h-fit"/>
                <div className="ml-3">
                    <p className="font-medium text-gray-900">Google Developer Student Clubs</p>
                    <p className="font-light text-gray-800">Universitas Sriwijaya</p>
                </div>
            </div>
            <div className="space-x-12 text-gray-700 hover:text-gray-900 transition">
                <Link to='/'>Home</Link>
                <Link to='/recordings'>Webinar & Workshop Recordings</Link>
                <Link to='/events'>Upcoming Events</Link>
                <Link to='/members'>Members</Link>
                <Link to='/about'>About GDSC</Link>
            </div>
        </nav>
    );
}

export default Navbar;