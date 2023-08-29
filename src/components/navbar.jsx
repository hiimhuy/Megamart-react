import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  ListBullets,
  MagnifyingGlass,
  List,
  MapPin,
  Truck,
  TagChevron,
} from "phosphor-react";
import "./navbar.scss";

export const Navbar = () => {
  const items = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sport, Toys & Luggage",
  ];

  const [activeItem, setActiveItem] = useState(0);

  const handleActive = (itemIndex) => {
    setActiveItem(itemIndex === activeItem ? null : itemIndex);
  };

  return (
    <div className="navbar">
      <div className="header-navbar">
        <p>Welcome to worldwide Megamart!</p>
        <div className="header-navbar-right">
          <div className="location">
            <MapPin className="icons" size={16} />
            <p>
              Deliver to <b>423651</b>
            </p>
          </div>
          <div className="truck">
            <Truck className="icons" size={16} />
            <p>Track your order</p>
          </div>
          <div className="offer">
            <TagChevron className="icons" size={16} />
            <p>All Offers</p>
          </div>
        </div>
      </div>
      <div className="body-navbar">
        <div className="logo">
          <Link to="/">
            <List className="icons" size={42} />
            <p>MegaMart</p>
          </Link>
        </div>
        <div className="search">
          <MagnifyingGlass className="icons" size={24} />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
          />
          <ListBullets className="icons" size={24} />
        </div>
        <div className="user-cart">
          <div className="user">
            <User className="icons" size={32} />
            <Link to="/login">
              <p>
                <b>Sign In</b>
              </p>
            </Link>
            /
            <Link to="/register">
              <p>
                <b>Sign Up</b>
              </p>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <ShoppingCart className="icons" size={32} />
              <p>
                <b>Cart</b>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <span></span>
      <div className="footer-navbar">
        {items.map((item, index) => (
          <div
            key={item}
            onClick={() => handleActive(index)}
            className={`item ${activeItem === index ? "active" : ""}`}
          >
            <b> {item}</b>
          </div>
        ))}
      </div>
      <span></span>
    </div>
  );
};
