import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App border border-info">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}