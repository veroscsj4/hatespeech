import React,  { useState, useEffect }  from "react"
import { createRoot } from 'react-dom/client';
import "/node_modules/uikit/dist/css/uikit.min.css"
import "/node_modules/uikit/dist/js/uikit.min.js"
import "/node_modules/uikit/dist/js/uikit-core.min.js"
import "./styles/index.css"
import LeftNav from './components/left-nav';
import App from "./App"
import Footer from "./components/footer"
import Navbar from "./components/nav"
import ReportPage from "./pages/ReportPage"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import HateSpeechPage from "./pages/HateSpeechPage";
import ResponsePage from "./pages/ResponsePage";

import MainDashboard from './pages/Dashboard/main';
import Login from './pages/Login';
import PrivateRoute from './pages/Dashboard/privateRoute';




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
/* Dashboard Nav */
const navListLeftDashboard = [
    {
        name: 'Overview',
        url: '/dashboard/overview',
    },
    {
        name: 'Analytics',
        url: '/dashboard/analytics',
    },
    {
        name: 'Settings',
        url: '/dashboard/settings',
    },


]

function Template() {
    const getCurrentPath = () => window.location.pathname;
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    /*useEffect(() => {
        // Check localStorage for rememberMe status and token
        const rememberMeStatus = localStorage.getItem('rememberMe') === 'true';
        const storedToken = localStorage.getItem('token');
    
        if (rememberMeStatus && storedToken) {
          // Validate the token (you may need to make an API call for this)
          // If the token is valid, set isAuthenticated to true
          // In a real-world application, you would have proper token validation logic
          setAuthenticated(true);
        }
      }, []);*/
    return ( 
        <>        
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App></App>}></Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
                <Route path="/report" element={<ReportPage></ReportPage>}></Route>
                <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
                <Route path="/hate-speech" element={<HateSpeechPage></HateSpeechPage>}></Route>
                <Route path="/response" element={<ResponsePage />}></Route>
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated} setRememberMe={setRememberMe}/>}></Route>
                <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                    <Route path='/dashboard' element={<MainDashboard />}/>
                </Route>    
            </Routes>
        </BrowserRouter>
        {getCurrentPath() !== "/dashboard" && <Footer />}
        </> 
    );
  }

// Render NavbarLeft using createRoot Dashboard
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current URL path
    const getCurrentPath = () => window.location.pathname;

    // Recursive function to try loading the content until the container is found
    const loadContent = () => {
        // Check if the current path is "/dashboard"
        if (getCurrentPath() === "/dashboard") {
            // If on the "/dashboard" subpage, try to render the LeftNav
            const dashboardContainer = document.getElementById("dashboard-container");

            // Check if the container element exists
            if (dashboardContainer) {
                // Create a new div for LeftNav
                const leftNavContainer = document.createElement("div");
                leftNavContainer.className = "uk-width-1-6@l uk-width-1-5@m";

                // Render LeftNav into the new container
                const leftNavRoot = createRoot(leftNavContainer);
                leftNavRoot.render(<LeftNav items={navListLeftDashboard} />);

                // Get the first child of dashboardContainer
                const firstChild = dashboardContainer.firstChild;

                // Insert leftNavContainer as the first child of dashboardContainer
                dashboardContainer.insertBefore(leftNavContainer, firstChild);
            } else {
                // If the container element is not found, try loading again after a delay
                console.error("Container element not found in the DOM");
                setTimeout(loadContent, 1000); 
            }
        }
    };

    // Initial attempt to load the content
    loadContent();
});





// Render Navbar using createRoot
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current URL path
    const getCurrentPath = () => window.location.pathname;

    // Check if the current path is not "/dashboard"
    if (getCurrentPath() !== "/dashboard") {
        // If not on the "/dashboard" page, render the Navbar
        const headerRoot = createRoot(document.getElementById("header"));
        headerRoot.render(<Navbar items={navList} />);
    }
});


// Render Template using createRoot
const root = createRoot(document.getElementById("root"));
root.render(<Template />);

// deprecated
// ReactDOM.render(<Navbar items={navList}/>, document.getElementById("header"));
// ReactDOM.render(<Template />, document.getElementById("root"));