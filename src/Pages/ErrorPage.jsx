import React from 'react';
import NotFoundImg from '../assets/App-Error.png';
import { Links} from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <img src={NotFoundImg} alt="" />
      <h1>Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>

      <Links to="/home">Go back to Home</Links>


    </div>




  );
};

export default ErrorPage;