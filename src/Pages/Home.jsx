import Banner from '../components/Banner';
import Trusted from '../components/Trusted';
import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';

const Home = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <Banner />
      <Trusted />
      <AppsCard data={data} />
    </div>
  );
};

export default Home;
