import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          Marshmellow
        </Link>

        <span>
          By Tayyaba Ali
        </span>
      </div>

      <nav
        className={`navbar-links ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link to="/#categories" onClick={closeMenu}>
          Categories
        </Link>

        <Link to="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <div className="navbar-right">

        <span className="phone">
          0308-5337403
        </span>

        <Link
          to="/shop"
          className="nav-icon"
          aria-label="Search"
        >
          🔍
        </Link>

        <Link
          to="/wishlist"
          className="nav-icon nav-count-icon"
          aria-label="Wishlist"
        >
          ♡

          {wishlistCount > 0 && (
            <span className="nav-count">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link
          to="/cart"
          className="nav-icon nav-count-icon"
          aria-label="Cart"
        >
          🛒

          {cartCount > 0 && (
            <span className="nav-count">
              {cartCount}
            </span>
          )}
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;