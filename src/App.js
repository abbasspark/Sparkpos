import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
