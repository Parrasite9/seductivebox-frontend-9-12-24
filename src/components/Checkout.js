import React, { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardInfo, setCardInfo] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    // Submit checkout form
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-[#A100ff]">Complete Your Purchase</h2>
        <form className="bg-white p-6 mt-10 rounded-lg shadow-md" onSubmit={handleCheckout}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Shipping Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Card Information</label>
            <input
              type="text"
              value={cardInfo}
              onChange={(e) => setCardInfo(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Card Number"
            />
          </div>
          <button className="w-full bg-[#ff00c3] text-white py-3 rounded-lg mt-6">Place Order</button>
        </form>
      </section>
    </div>
  );
}

export default Checkout;
