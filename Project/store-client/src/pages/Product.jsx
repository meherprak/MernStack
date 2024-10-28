import React from 'react'
import Navbar from '../components/Navbar'
const Products = () => {
  return (
  <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Products</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-medium">Product 1</h3>
            <p className="text-gray-700">Rs 800</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-medium">Product 2</h3>
            <p className="text-gray-700"> Rs 1200</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-medium">Product 3</h3>
            <p className="text-gray-700">Rs 1099</p>
          </div>
        </div>
      </main>
    </div>
  </>
  )
}

export default Products