import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer_heading">
        <div class="footer_heading-left">
          <h2>Megamart</h2>
          <h3>Contact Us</h3>
          <div class="footer_heading-left_whatsapp">
            <h5 class="footer_heading-left_apptext">
              <img
                class="footer_heading-left_appsize"
                src="../assets/footer/ant-design_whats-app-outlined.png"
                alt=""
              />
              Whats App
            </h5>
            <h4 class="footer_heading-left_phonenumber">+1 202-918-2132</h4>
          </div>
          <div class="footer_heading-left_call">
            <h5 class="footer_heading-left_apptext">
              <img
                class="footer_heading-left_appsize"
                src="../assets/footer/Call.png"
                alt=""
              />
              Call Us
            </h5>
            <h4 class="footer_heading-left_phonenumber">+1 202-918-2132</h4>
          </div>

          <div class="footer_heading-left_download">
            <h3>Download App</h3>
            <div class="footer_heading-left_appstore">
              <img src="../assets/footer/image 11.png" alt="" />
              <img src="../assets/footer/image 10.png" alt="" />
            </div>
          </div>
        </div>
        <div class="footer_heading-right all_item-hide">
          <div class="footer_heading-right_popular footer_heading-right_sizetext">
            <h3>Most Popular Categories</h3>
            <span></span>
            <ul>
              <li class="footer_ footer_heading-left_apptext">Staples</li>
              <li class="footer_ footer_heading-left_apptext">Beverages</li>
              <li class="footer_ footer_heading-left_apptext">Personal Care</li>
              <li class="footer_ footer_heading-left_apptext">Home Care</li>
              <li class="footer_ footer_heading-left_apptext">Baby Care</li>
              <li class="footer_ footer_heading-left_apptext">
                Vegetable & Fruits
              </li>
              <li class="footer_ footer_heading-left_apptext">
                Snacks & Foods
              </li>
              <li class="footer_ footer_heading-left_apptext">
                Dairy & Bakery
              </li>
            </ul>
          </div>
          <div class="footer_heading-right_services footer_heading-right_sizetext">
            <h3>Customer Services</h3>
            <span></span>
            <ul>
              <li class="footer_ footer_heading-left_apptext">About Us</li>
              <li class="footer_ footer_heading-left_apptext">
                Terms & Conditions
              </li>
              <li class="footer_ footer_heading-left_apptext">FAQ</li>
              <li class="footer_ footer_heading-left_apptext">
                Privacy Policy
              </li>
              <li class="footer_ footer_heading-left_apptext">
                E-waste Policy
              </li>
              <li class="footer_ footer_heading-left_apptext">
                Cancellation & return Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer_ending">
        <span></span>
        <h1>© 2022 All rights reserved. Reliance Retail Ltd.</h1>
      </div>
    </div>
  );
};
