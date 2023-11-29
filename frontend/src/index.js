import React from "react"
import ReactDOM from "react-dom";
import "/node_modules/uikit/dist/css/uikit.min.css"
import "/node_modules/uikit/dist/js/uikit.min.js"
import "/node_modules/uikit/dist/js/uikit-core.min.js"
import "./styles/index.css"
import App from "./App"
import Footer from "./components/footer"
import Navbar from "./components/nav"
import ReportPage from "./pages/ReportPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';


import HateSpeechPage from "./pages/HateSpeechPage";

const navList = [
    {
        name: 'Report',
        url: '/report',
    },
    {
        name: 'Hate Speech',
        url: '/hate-speech',
    },
    {
        name: 'About Us',
        url: '/about-us',
    },

]
function Template() {
    return ( 
        <>        
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App></App>}></Route>
                <Route path="*" element={<NoPage></NoPage>}></Route>
                <Route path="/Report" element={<ReportPage></ReportPage>}></Route>
                <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
                <Route path="/hate-speech" element={<HateSpeechPage></HateSpeechPage>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
        </> 
    );
  }


ReactDOM.render(<Navbar items={navList}/>, document.getElementById("header"));
ReactDOM.render(<Template />, document.getElementById("root"));
