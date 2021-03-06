// General Imports
import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EpicHomePage from "./pages/EpicHomePage/EpicHomePage";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RegisterBusiness from './pages/RegisterBusiness/RegisterBusiness';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <EpicHomePage/>
            </PrivateRoute>
          }/>
        <Route path="/epic" element={<EpicHomePage/>}/> 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newbusiness" element={<RegisterBusiness />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
