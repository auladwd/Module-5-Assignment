import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';

const Apps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-11/12 mx-auto flex justify-between items-center mb-4">
        <h1 className="md:text-2xl font-bold">
          Apps Found <span>{filteredData.length}</span>
        </h1>

        <label className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
          <input
            type="search"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="outline-none w-40 md:w-60"
          />
        </label>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 items-stretch">
        {filteredData.map(app => (
          <Link
            to={`/apps/${app.id}`}
            key={app.id}
            className="border rounded-2xl p-4 shadow hover:scale-105 transition-transform bg-white flex flex-col justify-between overflow-hidden"
          >
            <div className="">
              <img
                src={app.image}
                alt={app.title}
                className=" w-full h-35 object-contain rounded-xl mb-4 "
              />
              <h2 className="text-lg font-semibold">{app.title}</h2>
              <p className="text-sm text-justify mt-1">{app.description}</p>
            </div>

            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-2 bg-green-200 rounded-md px-2 py-1">
                <img className="w-[20px]" src={downloadImg} alt="" />
                <span>{app.downloads}</span>
              </div>

              <div className="flex items-center gap-2 bg-amber-200 rounded-md px-2 py-1">
                <img className="w-[20px]" src={ratingImg} alt="" />
                <span>{app.ratingAvg}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 pb-20 text-4xl font-bold">
          No apps found.
        </p>
      )}
    </div>
  );
};

export default Apps;
