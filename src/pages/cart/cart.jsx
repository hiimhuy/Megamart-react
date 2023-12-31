import React, { useContext } from "react";
import "./cart.scss";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>
            <b>Continue Shopping</b>
          </button>
          <button>
            <b>Checkout</b>
          </button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Your Cart is Empty</h1>
          <button onClick={() => navigate("/")}>
            <b>Continue Shopping</b>
          </button>
          <button>
            <b>Checkout</b>
          </button>
        </div>
      )}
    </div>
  );
};
