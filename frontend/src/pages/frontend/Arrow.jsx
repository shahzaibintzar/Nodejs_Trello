// src/App.js
import React from "react";

function Arrow() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-primary text-white p-4 rounded">
        <h1 className="text-2xl">My Website</h1>
      </header>

      <main className="mt-4">
        <div className="flex space-x-4">
          <div className="flex-1 bg-primary text-white p-4 rounded">
            Flex Item 1
          </div>
          <div className="flex-1 bg-secondary text-white p-4 rounded">
            Flex Item 2
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-200 mt-4 rounded cursor-pointer">
          <div className="text-primary">Left Content</div>
          <div className="text-secondary">Right Content</div>
        </div>

        <div className="mt-4">
          <button className="bg-primary hover:bg-primary-dark active:bg-primary-darker text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out">
            Button
          </button>
        </div>

        <div className="mt-4 flex space-x-2">
          <button className="flex items-center space-x-2 cursor-pointer">
            <span>Previous</span>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button className="flex items-center space-x-2 cursor-pointer">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span>Next</span>
          </button>
        </div>

        <div className="mt-4">
          <span className="text-primary text-2xl cursor-pointer">&#8592;</span>
          <span className="text-primary text-2xl cursor-pointer">&#8594;</span>
        </div>
      </main>
    </div>
  );
}

export default Arrow;
