import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim()
    ) {
      alert("Please fill all delivery information.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      customer: formData,
      items: cart,
      total: cartTotal,
    };

    const existingOrders =
      JSON.parse(
        localStorage.getItem("marshmellowOrders")
      ) || [];

    localStorage.setItem(
      "marshmellowOrders",
      JSON.stringify([
        newOrder,
        ...existingOrders,
      ])
    );

    clearCart();
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="checkout-empty">

        <div className="checkout-empty-icon">
          🛍️
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          Please add a dress to your cart before
          checking out.
        </p>

        <Link
          to="/"
          className="back-shopping-btn"
        >
          CONTINUE SHOPPING
        </Link>

      </section>
    );
  }

  if (orderPlaced) {
    return (
      <section className="checkout-success">

        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <p className="success-small">
            MARSHMELLOW
          </p>

          <h1>
            Order Placed Successfully! 🎀
          </h1>

          <p className="success-message">
            Thank you for shopping with
            Marshmellow.
          </p>

          <p className="success-message">
            Your order has been saved successfully. 💗
          </p>

          <button
            type="button"
            onClick={() => navigate("/orders")}
            className="home-btn"
          >
            VIEW MY ORDERS
          </button>

        </div>

      </section>
    );
  }

  return (
    <section className="checkout-page">

      <div className="checkout-header">
        <p>MARSHMELLOW</p>

        <h1>Checkout</h1>

        <span>
          Complete your order with love 🎀
        </span>
      </div>

      <div className="checkout-container">

        <div className="checkout-form-box">

          <h2>Delivery Information</h2>

          <p className="form-description">
            Enter your details so we can deliver
            your beautiful dresses safely.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="03XX-XXXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label htmlFor="address">
                Complete Address
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="House number, street, area..."
                rows="5"
                value={formData.address}
                onChange={handleChange}
              ></textarea>

            </div>

            <div className="form-group">

              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>

            <div className="payment-section">

              <h2>Payment Method</h2>

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  defaultChecked
                />

                <div>

                  <strong>
                    Cash on Delivery
                  </strong>

                  <p>
                    Pay when your order arrives.
                  </p>

                </div>

              </label>

            </div>

            <button
              type="submit"
              className="place-order-btn"
            >
              PLACE ORDER 🎀
            </button>

          </form>

        </div>

        <aside className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="checkout-products">

            {cart.map((item) => (
              <div
                className="checkout-product"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="checkout-product-info">

                  <h3>{item.name}</h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <strong>
                    Rs.{" "}
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </strong>

                </div>

              </div>
            ))}

          </div>

          <div className="checkout-divider"></div>

          <div className="checkout-row">
            <span>Subtotal</span>

            <strong>
              Rs. {cartTotal.toLocaleString()}
            </strong>
          </div>

          <div className="checkout-row">
            <span>Delivery</span>

            <strong>FREE</strong>
          </div>

          <div className="checkout-total">
            <span>Total</span>

            <strong>
              Rs. {cartTotal.toLocaleString()}
            </strong>
          </div>

        </aside>

      </div>
    </section>
  );
}

export default Checkout;