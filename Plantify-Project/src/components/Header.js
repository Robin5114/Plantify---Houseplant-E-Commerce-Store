import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="p-4 bg-green-600 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Plantify</h1>
      <nav className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
