import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const url = "https://velmorahub.onrender.com/api/auth/login";

  const handleForm = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !pass) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await axios.post(url, {
        email: email.trim(),
        password: pass
      }, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 10000
      });

      clearTimeout(timeoutId);

      if (res.status === 200) {
        toast.success("Login Successful! 🎉");
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));

        // Small delay to show success message
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (error) {
      clearTimeout(timeoutId);

      if (axios.isCancel(error)) {
        toast.error("Request timeout. Server is slow, please try again.");
      } else if (error.code === 'ECONNABORTED') {
        toast.error("Connection timeout. Please check your internet.");
      } else if (error.response) {
        switch (error.response.status) {
          case 403:
            toast.error("Access forbidden. Please contact support.");
            break;
          case 401:
            toast.error("Invalid email or password");
            break;
          case 404:
            toast.error("Login service not found");
            break;
          case 500:
            toast.error("Server error. Please try later.");
            break;
          default:
            toast.error(error.response.data?.message || "Login failed");
        }
      } else if (error.request) {
        toast.error("Cannot connect to server. Please check if the API is running.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
             <Link to="/" className="flex items-center -ml-4">
              <img
                src="/Logo.png"
                alt="Velmora Hub"
                className="h-36 sm:h-44 md:h-48 lg:h-52 w-auto object-contain"
              />
            </Link>

            {/* Search - Hidden on mobile */}
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-6 py-1 rounded-full hover:bg-yellow-600 transition-colors duration-300 text-sm font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link to="/orders" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5z" />
                </svg>
                <span className="text-xs hidden sm:block">Orders</span>
              </Link>

              <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs hidden sm:block">Wishlist</span>
              </Link>

              <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors group relative">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                <span className="text-xs hidden sm:block">Cart</span>
              </Link>

              <Link to="/register" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Login Form */}
      <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: '10s'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left animate-slideInLeft">
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30 animate-pulse">
                ✨ WELCOME BACK
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sign In to <span className="text-yellow-400">VelmoraHub</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
                Access your account to manage orders, track shipments, and discover exclusive deals tailored just for you.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50K+</div>
                  <div className="text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                  <div className="text-sm text-white/80">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10K+</div>
                  <div className="text-sm text-white/80">Products</div>
                </div>
              </div>
            </div>

            {/* Right Content - Login Card */}
            <div className="animate-slideInRight">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl max-w-md mx-auto w-full">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
                    Welcome Back!
                  </h2>
                  <p className="text-gray-600 mt-2">Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleForm} className="space-y-5">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="mr-2">📧</span> Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="mr-2">🔒</span> Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 pr-12"
                        placeholder="Enter your password"
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-600"
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-yellow-500 rounded focus:ring-yellow-500" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  {/* Register Link */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-gray-600">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                        Create Account
                      </Link>
                    </p>

                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-4 relative">
                        <span className="absolute inset-x-0 top-1/2 border-t border-gray-300"></span>
                        <span className="relative bg-white px-4 text-gray-500">Or continue with</span>
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-yellow-500 hover:shadow-lg transition-all duration-300">
                          <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </button>
                        <button className="w-12 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-yellow-500 hover:shadow-lg transition-all duration-300">
                          <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <img src="/logo.png" alt="Velmora Hub" className="h-12 mx-auto md:mx-0 mb-4" />
              <p className="text-gray-400 text-sm">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
            </div>

            {/* Company Column */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-yellow-500">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500">Contact</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-yellow-500">Careers</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help" className="text-gray-400 hover:text-yellow-500">Help Center</Link></li>
                <li><Link to="/returns" className="text-gray-400 hover:text-yellow-500">Returns</Link></li>
                <li><Link to="/shipping" className="text-gray-400 hover:text-yellow-500">Shipping</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-500">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-yellow-500">Terms</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-yellow-500">Cookies</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 mt-10 pt-10 text-center">
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates and exclusive offers!</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 VelmoraHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .bg-grid-16 {
          background-size: 4rem 4rem;
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Login;