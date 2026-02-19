import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        localStorage.setItem('adminToken', result.token);
        navigate('/admin/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl w-full max-w-md border border-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-slate-900 mb-2">Admin Panel</h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Secure Access Only</p>
        </div>
        
        {error && <p className="bg-red-50 text-red-500 p-4 rounded-2xl mb-6 text-center font-bold text-sm">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Username</label>
            <input required type="text" onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#1E63FF] transition-all font-medium text-slate-900" placeholder="admin" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Password</label>
            <input required type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#1E63FF] transition-all font-medium text-slate-900" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-[#0B0F3B] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#ff6a00] transition-all shadow-xl shadow-blue-900/20 active:scale-95">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
