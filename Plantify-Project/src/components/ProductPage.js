import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { products } from '../data/products';

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover mb-2" />
            <h3 className="font-bold">{product.name}</h3>
            <p>₹{product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <button
              className={`mt-2 px-4 py-1 rounded ${isInCart(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700 text-white'}`}
              onClick={() => dispatch(addToCart(product))}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
