import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

import axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
    const url="https://velmorahub.onrender.com/api/auth/login"
    const navigate=useNavigate();
     const handleForm =async(e)=>{
    e.preventDefault();

      try {
        const res= await axios.post(url,{
         email,
         password:pass
        })
        console.log(res)
        if(res.status==200){
        alert("Login successfully")
        sessionStorage.setItem("token", res.data.token)
        navigate("/")
        }
      } catch (error) {
        if (error.response) {
        console.log("Error Response:", error.response.data);
        alert("Login Failed");
      } else {
        console.log("Error:", error.message);
      }
      }


    }



  return (
      <div className="login-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-link">
            <div className="logo">
              <span className="logo-black">Velmora</span>
              <span className="logo-gold">Hub</span>
            </div>
          </Link>

          <div className="search-container">
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search for products..." />
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="nav-items">
            <Link to="/order" className="nav-item">
              <div className="nav-item-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5z" />
                </svg>
              </div>
              <span className="nav-item-label">Orders</span>
            </Link>

            <Link to="/wishlist" className="nav-item">
              <div className="nav-item-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <span className="nav-item-label">Wishlist</span>
            </Link>

            <Link to="/cart" className="nav-item">
              <div className="nav-item-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="nav-item-badge">3</span>
              </div>
              <span className="nav-item-label">Cart</span>
            </Link>

            <Link to="/register" className="login-button">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Login Form */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-badge">✨ WELCOME BACK</div>
            <h1 className="hero-title">
              Sign In to <span>VelmoraHub</span>
            </h1>
            <p className="hero-description">
              Access your account to manage orders, track shipments, and discover exclusive deals tailored just for you.
            </p>

            <div className="hero-features">
              <div className="feature">
                <span className="feature-number">50K+</span>
                <span className="feature-text">Happy Customers</span>
              </div>
              <div className="feature">
                <span className="feature-number">4.8★</span>
                <span className="feature-text">Average Rating</span>
              </div>
              <div className="feature">
                <span className="feature-number">10K+</span>
                <span className="feature-text">Products</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="login-card">
              <div className="login-header">
                <h2 className="login-title">Welcome Back!</h2>
                <p className="login-subtitle">Please enter your details to sign in</p>
              </div>

              <form onSubmit={handleForm} className="login-form">
                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label">
                    <i>📧</i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    required onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label className="form-label">
                    <i>🔒</i>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter your password"
                    required onChange={(e)=> setPass(e.target.value)}
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="form-options">
                  <div className="checkbox-group">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="checkbox-label">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
                </div>

                {/* Login Button */}
                <button type="submit" className="login-submit">
                  Sign In
                </button>

                {/* Register Link */}
                <div className="login-footer">
                  <p>Don't have an account? <Link to="/register">Create Account</Link></p>

                  <div className="social-login">
                    <p className="social-text">Or continue with</p>
                    <div className="social-buttons">
                      <button className="social-btn google">
                        <svg viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </button>
                      <button className="social-btn facebook">
                        <svg viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                        </svg>
                      </button>
                      <button className="social-btn github">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#000"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div>
              <h3 className="footer-brand">
                <span>Velmora</span><span className="logo-gold">Hub</span>
              </h3>
              <p className="footer-description">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="icon" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                <li><Link to="/careers" className="footer-link">Careers</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><Link to="/help" className="footer-link">Help Center</Link></li>
                <li><Link to="/returns" className="footer-link">Returns & Refunds</Link></li>
                <li><Link to="/shipping" className="footer-link">Shipping Info</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
                <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h4 className="newsletter-title">Subscribe to Our Newsletter</h4>
            <p className="newsletter-description">Get the latest updates on new products and exclusive offers!</p>
            <form className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Enter your email" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>© 2026 VelmoraHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;