import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('high');

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = id => {
    const updated = installedApps.filter(a => a.id !== id);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.success('App Uninstalled Successfully!');
  };

  const handleSort = e => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...installedApps].sort((a, b) => {
      const da = parseInt(a.downloads.replace(/\D/g, ''));
      const db = parseInt(b.downloads.replace(/\D/g, ''));
      return order === 'high' ? db - da : da - db;
    });

    setInstalledApps(sorted);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md my-10">
      <h2 className="text-3xl font-bold text-center mb-4">
        Your Installed Apps
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{installedApps.length} Apps Found</h3>
        <select
          onChange={handleSort}
          value={sortOrder}
          className="border rounded-md px-3 py-1 text-sm"
        >
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>
      </div>

      <div className="space-y-4">
        {installedApps.map(app => (
          <div
            key={app.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h4 className="font-semibold">{app.title}</h4>
                <div className="flex gap-3 text-sm text-gray-600">
                  <span>⬇ {app.downloads}</span>
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.size || '258 MB'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
