import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ₹{totalPrice}</p>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b py-2">
          <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
          <div>
            <p className="font-bold">{item.name}</p>
            <p>₹{item.price}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(decrement(item.id))} className="px-2 bg-yellow-400 rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increment(item.id))} className="px-2 bg-green-400 rounded">+</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      ))}

      <div className="mt-4 flex gap-4">
        <button onClick={() => alert('Checkout Coming Soon!')} className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
        <button onClick={() => navigate('/products')} className="bg-gray-500 text-white px-4 py-2 rounded">Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartPage;
