import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-100 hover:text-gray-400 transition-colors duration-300">
            PokéTCG Store
          </h1>
        </div>

        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} flex items-center space-x-6`}>
          <Link to="/" className="hover:text-gray-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400 transition-colors duration-300">
            Produtos
          </Link>
          <Link to="/cart" className="hover:text-gray-400 transition-colors duration-300">
            Carrinho
          </Link>

          {user ? (
            <>
              <span className="text-gray-100">{user.name}</span>
              <button
                onClick={logout}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all duration-300"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400 transition-colors duration-300">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all duration-300"
              >
                Cadastrar
              </Link>
            </>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          <button className="text-gray-200 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
