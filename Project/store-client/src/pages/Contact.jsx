import React from 'react'
import Navbar from '../components/Navbar'
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="bg-blue-600 w-full  text-white text-center">
        <h1 className="text-4xl font-bold">Report a Damaged Product</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center mt-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">We're Here to Help!</h2>
          <p className="text-gray-600 text-center">
            Please fill out the form below to report any issues with your product.
          </p>
          <form method="POST" action="#" className="space-y-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                placeholder="Order Number"
                required
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
              />
              <label
                htmlFor="orderNumber"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Order Number
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Describe the issue with your product..."
                required
                className="peer w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>

      <footer className="mt-auto p-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Our Store. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact