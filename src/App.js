import React from "react";
import Header from "./Components/ViewPage/Header/Header";
import Navigation from "./Components/ViewPage/Navigation/Navigation";
import Footer from "./Components/ViewPage/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navigation />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
