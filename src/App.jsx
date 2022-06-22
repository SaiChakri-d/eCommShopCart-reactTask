import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

function App() {
  const [count, setCount] = useState(0);
  const addItem = () => {
    setCount(count + 1);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const removeItem = () => {
    setCount(count - 1);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar count={count} />
      <Header />
      <div className="card-content d-flex flex-wrap justify-content-center">
        {/* passing the state variables and functions as a props */}
        <Section count={count} addItem={addItem} removeItem={removeItem} />
      </div>
      <Footer />
    </>
  );
}

export default App;
