import React from "react";
import { DataIcon, MenuDropdown } from "../assets/icons";
import { Graph1 } from "../assets/images";

const Transactions = () => {
  return (
    <div className='card-container shadow-sm rounded-xl min-w-[150px] border'>
      <div className='flex justify-between items-center px-4 py-5 '>
        <h1 className='text-[16px] font-latoB mb-5'>Total Income</h1>
        <MenuDropdown />
      </div>
      <ul className='flex gap-10 mb-5 px-4 '>
        <li className='text-[14px] font-latoB text-grey-light hover:text-blue-dark hover:underline'>
          <a href=''>All Transactions</a>
        </li>
        <li className='text-[14px] font-latoB text-grey-light hover:text-blue-dark hover:underline'>
          <a href=''>Success</a>
        </li>
        <li className='text-[14px] font-latoB text-grey-light hover:text-blue-dark hover:underline'>
          <a href=''>Pending</a>
        </li>
      </ul>
      <div className='flex items-center gap-2 pb-4 border-b justify-between px-4'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-verylight h-10 w-10 inline-flex justify-center items-center rounded-xl'>
            <DataIcon />
          </div>
          <div>
            <p className='text-[14px] text-black-dark font-latoB '>
              Apple Inc.
            </p>
            <span className='text-[11px] text-[#212529bf] font-latoB '>
              #ABLE-PRO-T00232
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
          <p className='text-[14px] text-red-medium font-latoB text-right'>
            10.6%
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-4 border-b justify-between px-4 mt-5'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-verylight h-10 w-10 inline-flex justify-center items-center rounded-xl'>
            <DataIcon />
          </div>
          <div>
            <p className='text-[14px] text-black-dark font-latoB '>
              Apple Inc.
            </p>
            <span className='text-[11px] text-[#212529bf] font-latoB '>
              #ABLE-PRO-T00232
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
          <p className='text-[14px] text-red-medium font-latoB text-right'>
            10.6%
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-4 border-b justify-between px-4 mt-5'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-verylight h-10 w-10 inline-flex justify-center items-center rounded-xl'>
            <DataIcon />
          </div>
          <div>
            <p className='text-[14px] text-black-dark font-latoB '>
              Apple Inc.
            </p>
            <span className='text-[11px] text-[#212529bf] font-latoB '>
              #ABLE-PRO-T00232
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
          <p className='text-[14px] text-red-medium font-latoB text-right'>
            10.6%
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-4 border-b justify-between px-4 mt-5'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-verylight h-10 w-10 inline-flex justify-center items-center rounded-xl'>
            <DataIcon />
          </div>
          <div>
            <p className='text-[14px] text-black-dark font-latoB '>
              Apple Inc.
            </p>
            <span className='text-[11px] text-[#212529bf] font-latoB '>
              #ABLE-PRO-T00232
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
          <p className='text-[14px] text-red-medium font-latoB text-right'>
            10.6%
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 pb-4 border-b justify-between px-4 mt-5'>
        <div className='flex items-center gap-4'>
          <div className='bg-blue-verylight h-10 w-10 inline-flex justify-center items-center rounded-xl'>
            <DataIcon />
          </div>
          <div>
            <p className='text-[14px] text-black-dark font-latoB '>
              Apple Inc.
            </p>
            <span className='text-[11px] text-[#212529bf] font-latoB '>
              #ABLE-PRO-T00232
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-black-dark font-latoB '>$210,000</p>
          <p className='text-[14px] text-red-medium font-latoB text-right'>
            10.6%
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4 pb-4 justify-center px-4 mt-5'>
        <a
          className='py-2 px-6 border border-black-lighter rounded-full text-[14px] text-grey-light font-latoB '
          href=''
        >
          View Transaction History
        </a>
        <a
          className='py-2 px-6 rounded-full text-[14px] text-white-light font-latoB bg-blue-lighter'
          href=''
        >
          Create New Transactions
        </a>
      </div>
    </div>
  );
};

export default Transactions;
