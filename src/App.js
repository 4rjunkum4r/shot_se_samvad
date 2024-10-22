// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import ScriptEditor from "./pages/ScriptEditor";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Make sure Footer is included

function App() {
  const [theme, setTheme] = useState("light"); // Default theme state

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        {" "}
        {/* Apply the theme class */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/scripteditor" element={<ScriptEditor />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />{" "}
        {/* Footer will be pushed to the bottom by flex-grow in the content */}
      </div>
    </Router>
  );
}

export default App;
