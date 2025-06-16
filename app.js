import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Remove duplicate Header and Body definitions below if present

const Footer = () => (
  <footer className="footer">
    <p>
      Copyright &copy; {new Date().getFullYear()}, Built by <strong>AYUSH🚀</strong>
    </p>
  </footer>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);