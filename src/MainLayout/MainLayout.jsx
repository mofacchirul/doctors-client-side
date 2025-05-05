import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="">
            <Navbar>

            </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;