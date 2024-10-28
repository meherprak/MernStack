import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full p-4 text-white text-center flex flex-row items-start justify-center"  >
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center mt-8">
            <div
                style={{ animation: 'slideInFromLeft 1s ease-out' }}
                className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
            >
                <h2
                    style={{ animation: 'appear 2s ease-out' }}
                    className="text-center text-4xl font-extrabold text-white"
                >
                    Welcome to My Page
                </h2>
                <p
                    style={{ animation: 'appear 3s ease-out' }}
                    className="text-center text-gray-200"
                >
                    This is a simple homepage showcasing author details.
                </p>
            </div>

            {/* Author Details Section */}
            <div className="mt-8 max-w-md w-full bg-white rounded-xl shadow-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">About the Author</h3>
                <p className="text-gray-600">
                    John Doe is a passionate web developer with over 5 years of experience in building dynamic and responsive web applications.
                </p>
                <p className="text-gray-600">Follow John on:</p>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                    </li>
                </ul>
            </div>
        </main>
    );
    };
    </div>
    </>
  )
}

export default Home