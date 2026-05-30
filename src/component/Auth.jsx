import React, { useState } from 'react';

export default function Auth({ setShowAuth, setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    const endpoint = isLogin ? 'login' : 'register';
    const body = isLogin
      ? { email: form.email, password: form.password }
      : { fullname: form.fullname, email: form.email, password: form.password };

    try {
      const res = await fetch(`https://ecommerce-backend-aa33.onrender.com/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong!');
        setLoading(false);
        return;
      }

      if (isLogin) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ fullname: data.fullname, email: data.email }));
        setUser({ fullname: data.fullname, email: data.email });
        setShowAuth(false);
      } else {
        alert('Account created! Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      setError('Something went wrong!');
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black">{isLogin ? 'Login' : 'Create Account'}</h2>
          <button
            onClick={() => setShowAuth(false)}
            className="text-gray-500 hover:text-black text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-xl">{error}</p>
        )}

        {/* Form */}
        <div className="space-y-3">
          {!isLogin && (
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={form.fullname}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-5 py-4 bg-cyan-500 text-white font-black text-lg rounded-2xl hover:bg-cyan-600 transition disabled:opacity-50"
        >
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle */}
        <p className="text-center mt-4 text-gray-500 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-cyan-500 font-bold ml-1"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

      </div>
    </div>
  );
}