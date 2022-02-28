import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-screen flex justify-between bg-gray-200 px-12 py-4">
            <h2>GDSC UNSRI</h2>
            <div className="space-x-12">
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
}

export default Navbar;