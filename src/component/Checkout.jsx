import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

export default function Checkout({ cart, setShowCheckout }) {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * (item.qty || 1);
    }, 0);
  };

  const totalUSD = getTotal();
  const totalNGN = totalUSD * 1600;

  const config = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: totalNGN * 100,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    metadata: {
      name: form.fullname,
      phone: form.phone,
      address: form.address
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    alert(`Payment successful! Reference: ${reference.reference}`);
    setShowCheckout(false);
  };

  const onClose = () => {
    alert('Payment cancelled.');
  };

  const handlePayment = () => {
    if (!form.fullname || !form.email || !form.phone || !form.address) {
      alert("Please fill in all fields!");
      return;
    }
    initializePayment({ onSuccess, onClose });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-black">Checkout</h2>
          <button
            onClick={() => setShowCheckout(false)}
            className="text-gray-500 hover:text-black text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">

          {/* Order Summary */}
          <div>
            <h3 className="text-lg font-bold mb-3">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-xl" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty || 1}</p>
                  </div>
                </div>
                <p className="font-bold text-cyan-500">{item.price}</p>
              </div>
            ))}
            <div className="mt-3 text-right">
              <p className="font-black text-xl">Total: ${totalUSD}</p>
              <p className="text-gray-500 text-sm">≈ ₦{totalNGN.toLocaleString()}</p>
            </div>
          </div>

          {/* Shipping Form */}
          <div>
            <h3 className="text-lg font-bold mb-3">Shipping Details</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={form.fullname}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500 resize-none"
              />
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full py-4 bg-cyan-500 text-white font-black text-lg rounded-2xl hover:bg-cyan-600 transition"
          >
            Pay ₦{totalNGN.toLocaleString()}
          </button>

        </div>
      </div>
    </div>
  );
}