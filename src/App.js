// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";


function App() {


  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
