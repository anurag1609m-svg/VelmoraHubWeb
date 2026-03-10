import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = sessionStorage.getItem("token");

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Fully Responsive with Logo */}
      {/* Navbar - Fully Responsive with Big Logo */}
<nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm mt-1 md:mt-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 py-3 md:py-0 md:h-24">

      {/* Logo - Left with BIG Size */}
    <Link to="/" className="flex items-center -ml-8">
  <img
    src="/Logo.jpg"
    alt="Velmora Hub"
    className="h-28 sm:h-32 md:h-36 lg:h-20 w-auto object-contain"
  />
</Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden order-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Search Bar */}
      <div className="w-full md:flex-1 md:max-w-2xl order-4 md:order-2 mt-3 md:mt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 sm:px-5 py-2.5 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-4 sm:px-6 py-1.5 text-sm sm:text-base rounded-full hover:bg-yellow-600 transition-colors duration-300 font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Desktop Navigation & Icons */}
      <div className="hidden md:flex items-center space-x-6 order-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/deals">Deals</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      {/* Right Icons - Desktop */}
      <div className="hidden md:flex items-center space-x-4 order-4">
        <Link to="/cart" className="relative p-2 text-gray-700 hover:text-yellow-500 transition-colors group">
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
            3
          </span>
        </Link>

        {!token ? (
          <Link to="/login" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-2 text-sm rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
            Login
          </Link>
        ) : (
          <Link to="/profile" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2 text-sm rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
            Profile
          </Link>
        )}
      </div>

      {/* Mobile Icons */}
      <div className="flex md:hidden items-center space-x-3 order-2">
        <Link to="/cart" className="relative p-1.5 text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-3.5 h-3.5 flex items-center justify-center">
            3
          </span>
        </Link>
        {!token ? (
          <Link to="/login" className="bg-gray-900 text-white px-3 py-1.5 text-xs rounded-full">
            Login
          </Link>
        ) : (
          <Link to="/profile" className="bg-yellow-500 text-white px-3 py-1.5 text-xs rounded-full">
            Profile
          </Link>
        )}
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
        <div className="flex flex-col space-y-2">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</MobileNavLink>
          <MobileNavLink to="/deals" onClick={() => setIsMenuOpen(false)}>Deals</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
        </div>
      </div>
    )}
  </div>
</nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block bg-yellow-500 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                ✨ New Collection 2026
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Elevate Your Style
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Discover premium products curated just for you. Shop the latest trends with exclusive deals up to 50% off.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-yellow-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Shop Now
                </button>
                <button className="bg-transparent text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1740664651822-3a02ec12c121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcG"
                  alt="Premium Shopping"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Shop by Category</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Explore our wide range of premium products</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              }
              name="Audio"
              count="120+"
            />
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="7" />
                  <polyline points="12 9 12 12 13.5 13.5" />
                  <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
                </svg>
              }
              name="Watches"
              count="85+"
            />
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              }
              name="Phones"
              count="150+"
            />
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              }
              name="Cameras"
              count="60+"
            />
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
              name="Computers"
              count="95+"
            />
            <CategoryCard
              icon={
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              }
              name="Electronics"
              count="200+"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Featured Products</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Handpicked items just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <ProductCard
              image="https://images.unsplash.com/photo-1738920424218-3d28b951740a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMHByb2R1Y3R8ZW58MXx8fHwxNzcyODE3NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Premium Wireless Headphones"
              rating="4.8"
              reviews="234"
              price="299.99"
              originalPrice="399.99"
              badge="Best Seller"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzI3MjYzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Luxury Smart Watch"
              rating="4.9"
              reviews="456"
              price="549.99"
              originalPrice="699.99"
              badge="New Arrival"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1755182529034-189a6051faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyNzQ5MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Wireless Earbuds Pro"
              rating="4.7"
              reviews="189"
              price="179.99"
              originalPrice="249.99"
              badge="Hot Deal"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1771726588700-e3baad15ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNuZWFrZXJzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzI4MTc0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Designer Sneakers"
              rating="4.6"
              reviews="312"
              price="159.99"
              originalPrice="229.99"
            />
            <ProductCard
              image="https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI3MzE3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Professional Laptop"
              rating="4.9"
              reviews="567"
              price="1299.99"
              originalPrice="1599.99"
              badge="Best Seller"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI3NDIzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Professional Camera"
              rating="4.8"
              reviews="423"
              price="899.99"
              originalPrice="1199.99"
            />
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 bg-transparent text-gray-900 text-sm sm:text-base rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Special Offers</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Limited time deals you don't want to miss</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Flash Sale */}
            <OfferCard
              bgColor="from-yellow-500 to-yellow-600"
              icon={
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              }
              title="Flash Sale"
              description="Up to 50% off on selected items. Hurry, limited stock!"
              showTimer={true}
              buttonText="Shop Flash Sale"
              buttonColor="text-yellow-600"
            />

            {/* Clearance Sale */}
            <OfferCard
              bgColor="from-gray-800 to-gray-900"
              icon={
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              }
              title="Clearance Sale"
              description="Last chance to grab amazing deals on seasonal items."
              showDiscount={true}
              buttonText="View Clearance"
              buttonColor="text-gray-900"
            />

            {/* Free Shipping */}
            <OfferCard
              bgColor="from-blue-500 to-blue-600"
              icon={
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              }
              title="Free Shipping"
              description="Get free shipping on all orders over $99. No code needed!"
              showShipping={true}
              buttonText="Start Shopping"
              buttonColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">What Our Customers Say</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Trusted by thousands of happy customers worldwide</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <ReviewCard
              name="Sarah Johnson"
              role="Verified Buyer"
              image="https://images.unsplash.com/photo-1758520387682-1ae18d2ebc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2hvcHBpbmclMjB3b21hbnxlbnwxfHx8fDE3NzI4MTc0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              comment="Absolutely love the quality of products from VelmoraHub! The customer service is exceptional and delivery was super fast."
              rating={5}
            />
            <ReviewCard
              name="Michael Chen"
              role="Premium Member"
              image="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc3NTYzNHww&ixlib=rb-4.1.0&q=80&w=1080"
              comment="Best online shopping experience I've had. Premium quality products at competitive prices. Highly recommended!"
              rating={5}
            />
            <ReviewCard
              name="Emily Rodriguez"
              role="Verified Buyer"
              image="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBjdXN0b21lciUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc3MjgxNzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
              comment="The attention to detail and packaging is amazing. Every purchase feels like a premium experience. Will definitely shop again!"
              rating={5}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-sm sm:text-base text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Column */}
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-4">
                <img
                  src="/Minimal 'VelmoraHub' Logo with Arrow Emblem.pdf"
                  alt="Velmora Hub"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto sm:mx-0">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <SocialIcon href="#" />
                <SocialIcon href="#" type="twitter" />
                <SocialIcon href="#" type="instagram" />
                <SocialIcon href="#" type="youtube" />
              </div>
            </div>

            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Company</h4>
              <ul className="space-y-2">
                <li><FooterLink href="#">About Us</FooterLink></li>
                <li><FooterLink href="#">Contact Us</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Support</h4>
              <ul className="space-y-2">
                <li><FooterLink href="#">Help Center</FooterLink></li>
                <li><FooterLink href="#">Returns & Refunds</FooterLink></li>
                <li><FooterLink href="#">Shipping Info</FooterLink></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Legal</h4>
              <ul className="space-y-2">
                <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
                <li><FooterLink href="#">Cookie Policy</FooterLink></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-10 sm:pt-12">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm sm:text-base mb-6">Get the latest updates on new products and exclusive offers!</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white text-sm sm:text-base"
                />
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>© 2026 VelmoraHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// NavLink Component with Left-to-Right Underline
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-yellow-500 font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-gray-700 hover:text-yellow-500 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

// Category Card Component
const CategoryCard = ({ icon, name, count }) => (
  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
    <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-sm sm:text-base font-semibold text-gray-900">{name}</div>
        <div className="text-xs sm:text-sm text-gray-600">{count} items</div>
      </div>
    </div>
  </div>
);

// Product Card Component
const ProductCard = ({ image, name, rating, reviews, price, originalPrice, badge }) => (
  <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
    <div className="relative overflow-hidden bg-gray-100 aspect-square">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      {badge && (
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-yellow-500 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {badge}
        </div>
      )}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    </div>
    <div className="p-3 sm:p-4 md:p-6">
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
        {name}
      </h3>
      <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-xs sm:text-sm font-medium">{rating}</span>
        </div>
        <span className="text-xs sm:text-sm text-gray-600">({reviews})</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">${price}</span>
        <span className="text-sm sm:text-base md:text-lg text-gray-400 line-through">${originalPrice}</span>
      </div>
      <button className="w-full bg-gray-900 text-white py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2">
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className="hidden xs:inline">Add to Cart</span>
        <span className="xs:hidden">Cart</span>
      </button>
    </div>
  </div>
);

// Offer Card Component
const OfferCard = ({ bgColor, icon, title, description, showTimer, showDiscount, showShipping, buttonText, buttonColor }) => (
  <div className={`bg-gradient-to-br ${bgColor} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}>
    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 opacity-90">{description}</p>

    {showTimer && (
      <div className="bg-white text-gray-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="text-xs sm:text-sm font-semibold mb-1">Ends In:</div>
        <div className="flex gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl font-bold">
          <TimeUnit value="12" label="Hours" />
          <span>:</span>
          <TimeUnit value="34" label="Mins" />
          <span>:</span>
          <TimeUnit value="56" label="Secs" />
        </div>
      </div>
    )}

    {showDiscount && (
      <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 text-center mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">70%</div>
        <div className="text-xs sm:text-sm font-semibold">OFF</div>
      </div>
    )}

    {showShipping && (
      <div className="bg-white text-blue-600 rounded-lg p-3 sm:p-4 text-center mb-4 sm:mb-6">
        <div className="text-base sm:text-lg md:text-xl font-bold mb-1">Orders $99+</div>
        <div className="text-xs sm:text-sm">Ships Free</div>
      </div>
    )}

    <button className={`w-full bg-white ${buttonColor} py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300`}>
      {buttonText}
    </button>
  </div>
);

// Time Unit Component
const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span>{value}</span>
    <span className="text-[8px] sm:text-xs font-normal">{label}</span>
  </div>
);

// Review Card Component
const ReviewCard = ({ name, role, image, comment, rating }) => (
  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative">
    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 text-yellow-500">
      <svg width="32" height="32" className="sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      </svg>
    </div>
    <div className="flex gap-1 mb-3 sm:mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
    <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-6 relative z-10 line-clamp-3">"{comment}"</p>
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-300">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-sm sm:text-base font-semibold text-gray-900">{name}</div>
        <div className="text-xs sm:text-sm text-gray-600">{role}</div>
      </div>
    </div>
  </div>
);

// Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
      {children}
    </a>
  </li>
);

// Social Icon Component
const SocialIcon = ({ href, type = "facebook" }) => {
  const getIcon = () => {
    switch(type) {
      case "twitter":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
    }
  };

  return (
    <a href={href} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
      {getIcon()}
    </a>
  );
};

export default Home;