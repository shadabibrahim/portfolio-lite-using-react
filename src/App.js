import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Template from "./components/Template";
import Footer from "./components/Footer";
import data from "./data/Templatedata";


let App = () => {
    return (
        <div>
            <Navbar />
            <About />
            {
            data.map((item,index)=>(
                
                   <Template key={index}
                     title={item.title}
                     description={item.description}
                   />
                
            ))
           }
            <Footer />
        </div>
    );
}
export default App;