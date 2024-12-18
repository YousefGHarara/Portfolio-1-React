import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
import Blog from "./pages/blog";
import Feedback from "./pages/feedback";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
      </Routes>
    
  );
};

export default App;
