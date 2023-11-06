import React from "react"
import ReactDom from "react-dom"
import "/node_modules/uikit/dist/css/uikit.min.css"
import "/node_modules/uikit/dist/js/uikit.min.js"
import "/node_modules/uikit/dist/js/uikit-core.min.js"
import "./styles/index.css"
import App from "./App"
import Footer from "./components/footer"
import Navbar from "./components/nav"

const navList = [
    {
        name: 'Melden',
        url: '#',
    },
    {
        name: 'Hassrede',
        url: '#',
    },
    {
        name: 'Über uns',
        url: '#',
    },
    {
        name: 'Blog',
        url: '#',
    }

]
function Template() {
    return ( 
        <>
        <App />
        <Footer />
        </> 
    );
  }


ReactDom.render(<Navbar items={navList}/>, document.getElementById("header"));
ReactDom.render(<Template />, document.getElementById("root"));


