import React from 'react';
import { NavLink } from 'react-router';
import HeroImg from '../assets/hero.png';
import AndImg from '../assets/Andr.png';
import AppImg from '../assets/App.png';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center mt-5 ">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            We Build <br /> <span className="text-purple-500">Productive</span>{' '}
            Apps
          </h1>
          <p className="py-6">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="space-x-5">
            <div className="flex justify-center items-center space-x-5">
              <NavLink
                to="https://play.google.com/store/games?hl=en"
                className="px-5 border py-1 rounded-md font-bold flex"
              >
                <img src={AndImg} alt="" />
                <p>Google Play</p>
              </NavLink>

              <NavLink
                to="https://www.apple.com/app-store/"
                className="px-5 border py-1 rounded-md font-bold flex"
              >
                <img src={AppImg} alt="" />
                <p>App Store</p>
              </NavLink>
            </div>

            <img src={HeroImg} alt="" className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
