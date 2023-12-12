import React,{useState,useEffect} from 'react'
import Home from '../src/components/Home.jsx'
import '../src/app.css'

const App=()=>{



const [currentPage,setCurrentPage]=useState("home")

const switchView = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      // Add more cases for other pages if needed
      default:
        return null; // or any default component you want to render
    }
  };
  
    return (
        <div className="app">
          <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-logo" onClick={() => setCurrentPage("home")}>
                <img
                  src=""
                  alt=""
                  className=""
                />
              </div>
              <ul className="nav-menu">
                <li className="nav-item" onClick={() => setCurrentPage("home")}>
                  Home
                </li>
              </ul>
            </div>
          </nav>
          <div className="content">{switchView()}</div>
        </div>
    )
}


export default App;