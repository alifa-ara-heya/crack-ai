import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div>

            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Root;