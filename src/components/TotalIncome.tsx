import React from "react";
import { DataIcon, MenuDropdown } from "../assets/icons";
import { Circle } from "../assets/images";

const TotalIncome = () => {
  return (
    <div className='card-container shadow-sm rounded-xl min-w-[150px] border'>
      <div className='flex justify-between items-center px-4 py-5 '>
        <h1 className='text-[16px] font-latoB mb-5'>Transactions</h1>
        <MenuDropdown />
      </div>
      <img
        className='m-auto w-[auto] h-[298px] text-center bg-blue-primary'
        src={Circle}
        alt='calender'
      />
      <div className='grid grid-cols-2'>
        <div className=' p-4 justify-between px-4 bg-slate-50 m-3 rounded-2xl bg-blue-secondary border border-blue-border'>
          <div className='flex items-center gap-4'>
            <span className='h-2 w-2 inline-flex justify-center items-center rounded-xl bg-blue-orange'></span>
            <div>
              <p className='text-[14px] text-black-dark font-latoB '>
                Apple Inc.
              </p>
            </div>
          </div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
        </div>
        <div className=' p-4 justify-between px-4 bg-slate-50 m-3 rounded-2xl bg-blue-secondary border border-blue-border'>
          <div className='flex items-center gap-4'>
            <span className='h-2 w-2 inline-flex justify-center items-center rounded-xl bg-blue-red'></span>
            <div>
              <p className='text-[14px] text-black-dark font-latoB '>
                Apple Inc.
              </p>
            </div>
          </div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
        </div>
        <div className=' p-4 justify-between px-4 bg-slate-50 m-3 rounded-2xl bg-blue-secondary border border-blue-border'>
          <div className='flex items-center gap-4'>
            <span className='h-2 w-2 inline-flex justify-center items-center rounded-xl bg-green-900'></span>
            <div>
              <p className='text-[14px] text-black-dark font-latoB '>
                Apple Inc.
              </p>
            </div>
          </div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
        </div>
        <div className=' p-4 justify-between px-4 bg-blue-secondary border border-blue-border m-3 rounded-2xl'>
          <div className='flex items-center gap-4'>
            <span className='h-2 w-2 inline-flex justify-center items-center rounded-xl bg-blue-green'></span>
            <div>
              <p className='text-[14px] text-black-dark font-latoB '>
                Apple Inc.
              </p>
            </div>
          </div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
        </div>
      </div>
    </div>
  );
};

export default TotalIncome;
