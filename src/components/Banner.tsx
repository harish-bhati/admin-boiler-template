import React from "react";
import { WelcomeBanner } from '../assets/images';


const Banner = () => {
  return ( 
    <div className="shadow-sm rounded-xl border m-5 px-10 py-5 bg-blue-dark flex items-center justify-between">
    <div className=" flex flex-col text-white basis-2/4 justify-between">
        <h1 className="text-[30px] font-latoB text-white-dark mb-4">Explore Redesigned Able Pro</h1>
        <p className="text-white-dark mb-4">The Brand new User Interface with power of Bootstrap Components. Explore the Endless possibilities with Able Pro.</p>
        <button className="p-3 rounded-full border text-white-dark w-60 hover:bg-white-light hover:text-blue-dark translate-x-0">Exclusive on Themeforest</button>
    </div>
    <img className="" src={WelcomeBanner} alt="welcome-banner"/>
    </div>
    
  );
};

export default Banner;
