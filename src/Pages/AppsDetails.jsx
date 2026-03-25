import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Star, Download, Users } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const appId = parseInt(id, 10);
  const app = data.find(p => p.id === appId);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];
    const alreadyInstalled = installedApps.some(a => a.id === appId);
    setIsInstalled(alreadyInstalled);
  }, [appId]);

  if (!app) return <p className="text-center text-red-500">App not found!</p>;

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
  } = app;

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];

    if (installedApps.some(a => a.id === appId)) {
      toast.info('App already installed!');
      return;
    }

    installedApps.push(app);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setIsInstalled(true);
    toast.success(`${title} Installed Successfully!`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-10 border border-gray-200">
      <div className="p-6 flex flex-col md:flex-row items-center gap-6 border-b border-gray-200">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 rounded-2xl object-cover shadow-md"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-blue-500 text-sm mb-4">
            Developed by <span className="font-medium">{companyName}</span>
          </p>

          <div className="flex justify-center md:justify-start gap-8 text-gray-700">
            <div className="text-center">
              <Download className="mx-auto mb-1 text-green-600" />
              <p className="font-semibold">{downloads}</p>
              <p className="text-sm">Downloads</p>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-1 text-yellow-500" />
              <p className="font-semibold">{ratingAvg}</p>
              <p className="text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-1 text-blue-500" />
              <p className="font-semibold">{Math.floor(reviews / 1000)}K</p>
              <p className="text-sm">Total Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-5 font-medium py-2 px-4 rounded-lg shadow-sm ${
              isInstalled
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isInstalled ? 'Installed' : 'Install Now (291 MB)'}
          </button>
        </div>
      </div>

      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h3>
        {ratings?.map(r => (
          <div key={r.name} className="flex items-center mb-2">
            <span className="w-16 text-sm text-gray-600">{r.name}</span>
            <div className="flex-1 bg-gray-200 h-3 rounded-full mx-2">
              <div
                className="bg-orange-400 h-3 rounded-full"
                style={{
                  width: `${(r.count / ratings[4].count) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">
              {r.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
