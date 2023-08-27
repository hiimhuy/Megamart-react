import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart, User, ListBullets, MagnifyingGlass, List, MapPin, Truck, TagChevron} from 'phosphor-react'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="header-navbar">
        <p>Welcome to worldwide Megamart!</p>
        <div className='header-navbar-right'>
          <div className='location'>
            <MapPin className='icons' size={16}/>
            <p>Deliver to <b>423651</b></p>
          </div>
          <div className="truck">
            <Truck className='icons' size={16}/>
            <p>Track your order</p>
          </div>
          <div className="offer">
            <TagChevron className='icons' size={16}/>
            <p>All Offers</p>
          </div>
        </div>
      </div>
      <div className='body-navbar'>
          <div className="logo">
            <Link to='/'>
              <List className='icons' size={42}/>
               <p>MegaMart</p>
            </Link>
          </div>
          <div className="search">
            <MagnifyingGlass className='icons' size={24}/>
            <input type="text" placeholder='Search essentials, groceries and more...' />
            <ListBullets className='icons' size={24}/>
          </div>
          <div className='user-cart'>
            <div className='user'>
              <User className='icons' size={32}/>
              <Link to='/login'>
                <p><b>Sign In</b></p>
              </Link>
              /
              <Link to='/register'>
                <p><b>Sign Up</b></p>
              </Link>
            </div>
            <div className="cart">
              <Link to='/cart'>
                <ShoppingCart className='icons' size={32}/>
                <p><b>Cart</b></p>
              </Link>
            </div>
          </div>
      </div>
      <span></span>
      <div className="footer-navbar">
        <div className="item"><b>Groceries</b></div>
        <div className="item"><b>Premium Fruit</b></div>
        <div className="item"><b>Home & Kitchen</b></div>
        <div className="item"><b>Fashion</b></div>
        <div className="item"><b>Electronics</b></div>
        <div className="item"><b>Beauty</b></div>
        <div className="item"><b>Home Improvement</b></div>
        <div className="item"><b>Sport, Toy & Luggage</b></div>
      </div>
      <span></span>

    </div>
  )
}
