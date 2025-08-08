
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "./redux/cartSlice";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // ✅ matched name
  const dispatch = useDispatch();

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>PKR {item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: PKR {getTotalPrice()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

