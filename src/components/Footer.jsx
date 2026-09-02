import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h2>Marshmellow</h2>
          <p>Pretty dresses for every little celebration.</p>
          <p>Owner: Tayyaba Ali</p>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h3>Shop</h3>
          <a href="#">New Arrivals</a>
          <a href="#">Party Wear</a>
          <a href="#">Everyday Dresses</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Phone: 0308-5337403</p>
          <p>Email: tayyabaali13@gmail.com</p>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Shipping & Delivery</a>
          <a href="#">Returns & Exchange</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Marshmellow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;