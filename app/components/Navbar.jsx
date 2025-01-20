"use client"
import React from 'react'
import Link from 'next/link'
// import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="w-full px-6 py-4 underline border-solid border-2 text-white flex items-center justify-between">
        <div className="flex md:flex flex-grow justify-center space-x-8">
          <Link href="/" >
            Home
          </Link>
          <Link href="/myRecipe">
            My Recipe
          </Link>
        </div>
        {/* <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div> */}
      </nav>
      
      {/* {isSidebarOpen && (
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gray-900 text-white flex flex-col items-start space-y-6 px-4 py-6 shadow-lg z-50 md:hidden">
          <Link
            href="/"
            className="hover:text-red-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/myRecipe"
            className="hover:text-red-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            My Recipe
          </Link>
        </div>
      )} */}
    </div>
  )
}

export default Navbar
