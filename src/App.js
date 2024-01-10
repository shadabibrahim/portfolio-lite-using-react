import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Template from "./components/Template";
import Footer from "./components/Footer";
let App = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Template heading="Skills" para="Lorem ipsum dolor sit amet, consectetur adipiscing el
            sed do eiusmod tempor incididunt ut labore et dolore magna al
            iqua. Ut enim ad minim veniam, quis nostrud exercitation u
            llamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."/>
             <Template heading="Qualifiaction" para="Lorem ipsum dolor sit amet, consectetur adipiscing el
            sed do eiusmod tempor incididunt ut labore et dolore magna al
            iqua. Ut enim ad minim veniam, quis nostrud exercitation u
            llamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."/>
             <Template heading="Projects" para="Lorem ipsum dolor sit amet, consectetur adipiscing el
            sed do eiusmod tempor incididunt ut labore et dolore magna al
            iqua. Ut enim ad minim veniam, quis nostrud exercitation u
            llamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."/>
            <Footer/>
        </div>
    );
}
export default App;