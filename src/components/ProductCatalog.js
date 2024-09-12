import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#A100ff]">Our Collection</h2>
        <p className="text-lg mt-4 text-gray-700">Explore our latest lingerie pieces and subscribe for your curated box.</p>

        <div className="flex flex-wrap justify-center mt-8">
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <img src={product.default_pic_url} alt={product.name} className="w-full h-64 object-cover"/>
                <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                <p className="text-gray-600">Size: {product.size}</p>
                <p className="text-gray-600">Color: {product.color}</p>
                <p className="text-pink-600 font-bold mt-4">${product.price}</p>
                <button className="mt-4 bg-[#ff00c3] text-white px-6 py-2 rounded-full">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductCatalog;
