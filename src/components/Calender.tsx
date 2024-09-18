import React from "react";
import { calender } from '../assets/images';


const Calender = () => {
  return (
    <div className="shadow-sm rounded-xl border ">
        <h1 className="text-[22px] font-bold border-b px-4 py-3">Calender</h1>
        <img className="px-4 py-3" src={calender} alt="calender" />
    </div>
  );
};

export default Calender;
