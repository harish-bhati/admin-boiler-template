import React from "react";


const CardList = () => {
  return (
    <div className="card-container grid grid-cols-3 gap-3 px-4 py-3">
        <div className="shadow-sm rounded-xl px-4 py-3 min-w-[150px] border bg-blue-verylight">
            <p className="text-[14px]">Total Hours Spent</p>
            <p className="font-bold text-[30px]">250</p>
        </div>
        <div className="shadow-sm rounded-xl px-4 py-3 min-w-[150px] border bg-blue-verylight">
            <p className="text-[14px]">Total Amount Spent</p>
            <p className="font-bold text-[30px]">$3000</p>
        </div>
        <div className="shadow-sm rounded-xl px-4 py-3 min-w-[150px] border bg-blue-verylight">
            <p className="text-[14px]">Flag</p>
            <p className="font-bold text-[30px]">61</p>
        </div>
    </div>
    

  );
};

export default CardList;
