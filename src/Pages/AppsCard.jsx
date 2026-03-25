import { Link } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import ratingImg from '../assets/icon-ratings.png';

const AppsCard = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <p className="text-center text-gray-500">Loading apps...</p>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market Developed by us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.slice(0, 8).map(app => (
          <Link
            to={`/apps/${app.id}`}
            key={app.id}
            className="border rounded-2xl p-4 shadow hover:scale-105 transition-transform bg-white "
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-35 object-contain rounded-xl mb-4 "
            />
            <div className="mt-1">
              <h2 className="text-lg font-semibold ">{app.title}: </h2>
              <h2 className="text-lg font-semibold text-justify">
                {app.description}
              </h2>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2 mt-2 bg-green-200 rounded-md px-2">
                <span>
                  <img className="w-[20px]" src={downloadImg} alt="" />
                </span>
                <span>{app.downloads}</span>
              </div>

              <div className="flex items-center gap-2 mt-2 bg-amber-200 rounded-md px-2">
                <img className="w-[20px]" src={ratingImg} alt="" />
                <span>{app.ratingAvg}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/apps" className="flex justify-center ite">
        <button className="mb-10 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
          See All Apps
        </button>
      </Link>
    </div>
  );
};

export default AppsCard;
