import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const token = sessionStorage.getItem("token");
  const profileurl = "https://velmorahub.onrender.com/api/user/profile";
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(profileurl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      setProfile(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - EXACT same as Home */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm mt-1 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 py-3 md:py-0 md:h-24">

            {/* Logo */}
            <Link to="/" className="flex items-center -ml-4">
              <img
                src="/Logo.png"
                alt="Velmora Hub"
                className="h-36 sm:h-44 md:h-48 lg:h-52 w-auto object-contain"
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 order-3">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </div>

            {/* Desktop Right Icons */}
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
                <MobileNavLink to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</MobileNavLink>
                <MobileNavLink to="/orders" onClick={() => setIsMenuOpen(false)}>Orders</MobileNavLink>
                <MobileNavLink to="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Profile Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 capitalize">Welcome back, {profile.name || 'User'}! 👋</h1>
              <p className="text-gray-800 mt-1">We're glad to see you again. Check out your profile details below.</p>
            </div>
          </div>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Profile Information</h2>

            {/* Update Details Button */}
            <button
              onClick={() => setShowUpdateModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Update Details
            </button>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">User ID</label>
                <p className="text-base sm:text-lg font-semibold text-gray-900">#{profile.id || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                <p className="text-base sm:text-lg font-semibold text-gray-900 capitalize">{profile.name || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Role</label>
                <p className="text-base sm:text-lg font-semibold">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {profile.role || 'USER'}
                  </span>
                </p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">{profile.email || 'N/A'}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{profile.phone || 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</label>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{profile.address || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-xs sm:text-sm text-gray-600">Wishlist Items</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Pending Reviews</div>
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Update Profile Details</h3>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
                    <input
                      type="text"
                      defaultValue={profile.id}
                      disabled
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={profile.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      defaultValue={profile.role}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    disabled
                   />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue={profile.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                     disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={profile.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      defaultValue={profile.address}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 p-4 sm:p-6 border-t border-gray-200">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg order-1 sm:order-2"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer - EXACT same as Home */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start mb-4">
                <img
                  src="/Logo.png"
                  alt="Velmora Hub"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto sm:mx-0">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <SocialIcon href="#" type="facebook" />
                <SocialIcon href="#" type="twitter" />
                <SocialIcon href="#" type="instagram" />
                <SocialIcon href="#" type="youtube" />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Company</h4>
              <ul className="space-y-2">
                <li><FooterLink href="#">About Us</FooterLink></li>
                <li><FooterLink href="#">Contact Us</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Support</h4>
              <ul className="space-y-2">
                <li><FooterLink href="#">Help Center</FooterLink></li>
                <li><FooterLink href="#">Returns & Refunds</FooterLink></li>
                <li><FooterLink href="#">Shipping Info</FooterLink></li>
              </ul>
            </div>

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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// NavLink Component
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

// Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
      {children}
    </a>
  </li>
);

// Social Icon Component
const SocialIcon = ({ href, type }) => {
  const icons = {
    facebook: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    )
  };

  return (
    <a
      href={href}
      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
    >
      {icons[type]}
    </a>
  );
};

export default Profile;