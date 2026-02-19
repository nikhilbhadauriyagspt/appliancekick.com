import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaCalendarAlt, FaEnvelope, FaUser, FaClock, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { API_ENDPOINTS } from '../../config/api';

const AdminDashboard = () => {
  const [data, setData] = useState({ bookings: [], contacts: [], newsletter: [] });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_SUBMISSIONS);
      const result = await response.json();
      if (result.status === 'success') {
        setData(result.data);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50 font-black tracking-widest text-[#0B0F3B] uppercase">Loading System Data...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-[#0B0F3B] text-white py-6 px-8 flex justify-between items-center sticky top-0 z-[150] shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#ff6a00] rounded-xl flex items-center justify-center font-black italic">A</div>
          <h1 className="text-xl font-black uppercase tracking-widest">Admin Control Center</h1>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all">
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      <div className="p-8 lg:p-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['bookings', 'contacts', 'newsletter'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                activeTab === tab 
                ? 'bg-[#1E63FF] text-white shadow-xl shadow-blue-500/30 scale-105' 
                : 'bg-white text-slate-400 hover:bg-white/80 border border-slate-100'
              }`}
            >
              {tab} ({data[tab].length})
            </button>
          ))}
        </div>

        {/* Content Table */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              {activeTab === 'bookings' && (
                <tr>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Client</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Appliance</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Location</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Date</th>
                </tr>
              )}
              {activeTab === 'contacts' && (
                <tr>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Sender</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Message</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Date</th>
                </tr>
              )}
              {activeTab === 'newsletter' && (
                <tr>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Subscriber Email</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Join Date</th>
                </tr>
              )}
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data[activeTab].map((item, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-all group">
                  {activeTab === 'bookings' && (
                    <>
                      <td className="p-8">
                        <div className="font-bold text-slate-900 mb-1">{item.name}</div>
                        <div className="text-xs text-slate-400 font-medium">{item.email} | {item.phone}</div>
                      </td>
                      <td className="p-8">
                        <span className="px-4 py-1.5 bg-blue-50 text-[#1E63FF] rounded-full text-[10px] font-black uppercase tracking-widest">
                          {item.appliance}
                        </span>
                      </td>
                      <td className="p-8 text-sm text-slate-500 font-medium max-w-xs truncate">{item.location}</td>
                      <td className="p-8">
                        <div className="flex items-center gap-2 text-green-500 text-xs font-black uppercase">
                          <FaCheckCircle /> {item.status}
                        </div>
                      </td>
                      <td className="p-8 text-right text-[10px] font-black text-slate-300 uppercase">{item.created_at}</td>
                    </>
                  )}
                  {activeTab === 'contacts' && (
                    <>
                      <td className="p-8">
                        <div className="font-bold text-slate-900 mb-1">{item.name}</div>
                        <div className="text-xs text-slate-400 font-medium">{item.email}</div>
                      </td>
                      <td className="p-8 font-bold text-slate-700 text-sm">{item.subject}</td>
                      <td className="p-8 text-sm text-slate-500 font-medium max-w-md italic">"{item.message}"</td>
                      <td className="p-8 text-right text-[10px] font-black text-slate-300 uppercase">{item.created_at}</td>
                    </>
                  )}
                  {activeTab === 'newsletter' && (
                    <>
                      <td className="p-8 font-black text-slate-900 text-lg tracking-tight">{item.email}</td>
                      <td className="p-8 text-right text-[10px] font-black text-slate-300 uppercase">{item.created_at}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {data[activeTab].length === 0 && (
            <div className="p-20 text-center text-slate-300 font-black uppercase tracking-[5px]">No entries found in this category</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
