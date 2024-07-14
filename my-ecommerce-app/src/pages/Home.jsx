import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

function Home({ featuredProducts, addToCart }) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 style={{
              fontFamily: "Roboto Mono"
          }}>Welcome To Ozmio Store</h1>
          <p style={{
              fontFamily: "Roboto Mono"
          }}>Your One stop for gaming gears</p>
          <Link to="/products" className="cta-button" style={{
              fontFamily: "Roboto Mono"
          }}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <FaShippingFast className="feature-icon" />
          <h3 style={{
              fontFamily: "Roboto Mono"
          }}>Free Shipping</h3>
          <p>On orders over Rs 5000</p>
        </div>
        <div className="feature">
          <FaMoneyBillWave className="feature-icon" />
          <h3 style={{
              fontFamily: "Roboto Mono"
          }}>Money Back</h3>
          <p>30 days guarantee</p>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon" />
          <h3 style={{
              fontFamily: "Roboto Mono"
          }}>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </section>

      <section className="featured-products">
        <h2 style={{
              fontFamily: "Roboto Mono"
          }}>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2 style={{
              fontFamily: "Roboto Mono"
          }}>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on new products and upcoming sales</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
