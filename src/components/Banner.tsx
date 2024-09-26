import React from "react";
import { WelcomeBanner } from "../assets/images";

const Banner = () => {
  return (
    <div className='shadow-sm rounded-xl border px-10 py-5 bg-blue-primary   flex items-center justify-between'>
      <div className=' flex flex-col text-white basis-2/4 justify-between'>
        <h1 className='text-[30px] font-latoB text-white-dark mb-4'>
          Explore Redesigned Able Pro
        </h1>
        <p className='text-white-dark mb-4'>
          The Brand new User Interface with power of Bootstrap Components.
          Explore the Endless possibilities with Able Pro.
        </p>
        <button className='secondary max-w-64'>
          Exclusive on Themeforest
        </button>
      </div>
      <img className='' src={WelcomeBanner} alt='welcome-banner' />
    </div>
  );
};

export default Banner;
