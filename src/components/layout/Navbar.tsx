import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User2, Package } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
        isActive(to)
          ? 'bg-indigo-100 text-indigo-600'
          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              GadgetHub
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/products">
                <Package className="h-5 w-5" />
                <span>Каталог</span>
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink to="/cart">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </div>
              <span className="hidden md:inline">Корзина</span>
            </NavLink>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <User2 className="h-6 w-6 text-gray-600" />
                  <span className="hidden md:inline text-gray-600">{user.email}</span>
                </div>
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <User2 className="h-6 w-6" />
                <span className="hidden md:inline">Войти</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}