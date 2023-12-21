import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Page/Home";

const Main = () => {
    return(
        <div>
             <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    )}
export default Main;