import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="w-screen flex justify-between items-center shadow-md px-12 py-2 lg:text-sm xl:text-base fixed top-0 bg-white z-50" >
            <div className="flex items-center">
                <img src="/gdsc-unsri-logo.png" alt="gdsc-unsri-logo" className="xl:w-16 lg:w-12 h-fit"/>
                <div className="ml-3">
                    <p className="font-medium text-gray-800">Google Developer Student Clubs</p>
                    <p className="font-light text-gray-500">Universitas Sriwijaya</p>
                </div>
            </div>
            <div className="space-x-12 text-gray-600">
                <Link className="hover:text-gray-900 transition" to='/'>Home</Link>
                <Link className="hover:text-gray-900 transition" to='/recordings'>Recordings</Link>
                <Link className="hover:text-gray-900 transition" to='/events'>Upcoming Events</Link>
                <Link className="hover:text-gray-900 transition" to='/members'>Members</Link>
                <Link className="hover:text-gray-900 transition" to='/about'>About GDSC</Link>
            </div>
        </nav>
    );
}

export default Navbar;