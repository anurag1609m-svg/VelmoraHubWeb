import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const token = sessionStorage.getItem("token");

  // Profile data only
  const userData = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 98765 43210',
    gender: 'Male',
    dob: '1995-05-15',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200',
    memberSince: 'January 2025',
    address: 'B-401, Silver Spring Apartments, Andheri East, Mumbai - 400069'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Exactly same as Home.jsx */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 group">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                Velmora
              </span>
              <span className="text-2xl font-bold text-yellow-500">
                Hub
              </span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-6 py-1 rounded-full hover:bg-yellow-600 transition-colors duration-300 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Nav Icons */}
            <div className="flex items-center space-x-6">
              <Link to="/order" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5z" />
                </svg>
                <span className="text-xs font-medium">Orders</span>
              </Link>

              <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="text-xs font-medium">Wishlist</span>
              </Link>

              <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors duration-300 group relative">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  3
                </span>
                <span className="text-xs font-medium">Cart</span>
              </Link>

              {!token ? (
                <Link to="/login" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                  Login
                </Link>
              ) : (
                <Link to="/profile" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                  Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Profile Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cover Photo */}
        <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-20 shadow-xl">
          <img
            src={userData.coverImage}
            alt="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Profile Picture and Name */}
          <div className="absolute -bottom-12 left-8 flex items-end gap-6">
            <div className="relative">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-28 h-28 rounded-2xl border-4 border-white shadow-xl object-cover"
              />
            </div>
            <div className="mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-white">{userData.name}</h1>
              <p className="text-gray-200 text-sm">Member since {userData.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Profile Information</h2>

            {/* Update Details Button */}
            <button
              onClick={() => setShowUpdateModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Update Details
            </button>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                <p className="text-lg font-semibold text-gray-900">{userData.name}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                <p className="text-lg font-semibold text-gray-900">{userData.email}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
                <p className="text-lg font-semibold text-gray-900">{userData.phone}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Date of Birth</label>
                <p className="text-lg font-semibold text-gray-900">{userData.dob}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Gender</label>
                <p className="text-lg font-semibold text-gray-900">{userData.gender}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</label>
                <p className="text-lg font-semibold text-gray-900">{userData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Update Profile Details</h3>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={userData.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue={userData.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={userData.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue={userData.dob}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      defaultValue={userData.gender}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows="3"
                      defaultValue={userData.address}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 p-6 border-t border-gray-200">
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

      {/* Footer - Same as Home.jsx */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Velmora</span>
                <span className="text-yellow-500">Hub</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Your premium destination for quality products and exceptional shopping experience.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Careers</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Shipping Info</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-500">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Get the latest updates on new products and exclusive offers!</p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                />
                <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 VelmoraHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add animation style */}
      <style jsx>{`
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Profile;