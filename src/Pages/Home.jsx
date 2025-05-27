import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Library</h1>
        <p className="text-lg md:text-xl mb-6">Manage books, track borrowers, and streamline your library tasks.</p>
        <Link to="/books">
          <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-blue-100 transition">
            Browse Books
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📚 Easy Book Management</h2>
          <p className="text-gray-600">Add, update, or delete book records efficiently.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">👤 Member Tracking</h2>
          <p className="text-gray-600">Keep track of who borrowed which books and when.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🕓 Due Date Reminders</h2>
          <p className="text-gray-600">Never miss a due date with smart tracking features.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-white border-t">
        <h2 className="text-2xl font-semibold mb-4">Ready to explore the library?</h2>
        <Link to="/login">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Login / Register
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
