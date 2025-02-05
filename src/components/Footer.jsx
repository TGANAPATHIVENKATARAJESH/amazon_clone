import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
        <p className="mb-0">Created by <strong>Rajesh Thummaganti</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
