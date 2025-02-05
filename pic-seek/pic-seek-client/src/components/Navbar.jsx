import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Pic-Seek</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link>All Images</Link></li>
                    <li><Link to='/generate'>Generate Image</Link></li>
                    <li><Link>Login</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;