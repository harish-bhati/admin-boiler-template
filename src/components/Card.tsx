import React from "react";
import { EarningIcon, PageIcon } from "../assets/icons";
import { TaskIcon } from "../assets/icons/TaskIcon";
import { DownloadIcon } from "../assets/icons/DownloadIcon";

const Card = () => {
  const isDark = true;
  return (
    <div className='card-container grid grid-cols-4 gap-5'>
      <div className='shadow-sm rounded-xl px-4 py-3 min-w-[150px] border border-blue-border space-y-4 bg-blue-white'>
        <h1 className='flex gap-4 items-center text-blue-label font-latoB'>
          {" "}
          <EarningIcon />
          All Earning
        </h1>
        <div
          className={`p-4 flex gap-3 items-center rounded-xl ${
            isDark ? "bg-blue-secondary text-white-light" : "bg-blue-secondary"
          }`}
        >
          <div>Bar Graph</div>
          <div className='ml-auto'>
            <span className='font-bold text-[30px]'>3000</span>
            <p className='flex gap-1 items-center text-blue-primary'>
              <EarningIcon /> 30.6%
            </p>
          </div>
        </div>
      </div>
      <div className='shadow-sm rounded-xl px-4 py-3 min-w-[150px] border  border-blue-border space-y-4 bg-blue-white'>
        <h1 className='flex gap-4 items-center text-blue-label font-latoB'>
          {" "}
          <PageIcon />
          Page Views
        </h1>
        <div className='p-4 bg-blue-secondary flex gap-3 items-center rounded-xl'>
          <div>Bar Graph</div>
          <div className='ml-auto'>
            <span className='font-bold text-[30px]'>290+</span>
            <p className='flex gap-1 items-center text-blue-primary'>
              <EarningIcon /> 30.6%
            </p>
          </div>
        </div>
      </div>
      <div className='shadow-sm rounded-xl px-4 py-3 min-w-[150px] border border-blue-border space-y-4 bg-blue-white'>
        <h1 className='flex gap-4 items-center text-blue-label font-latoB'>
          {" "}
          <TaskIcon />
          Total Task
        </h1>
        <div className='p-4 flex gap-3 items-center rounded-xl bg-blue-secondary'>
          <div>Bar Graph</div>
          <div className='ml-auto'>
            <span className='font-bold text-[30px]'>1568</span>
            <p className='flex gap-1 items-center text-blue-primary'>
              <EarningIcon /> 30.6%
            </p>
          </div>
        </div>
      </div>
      <div className='shadow-sm rounded-xl px-4 py-3 min-w-[150px] border border-blue-border space-y-4 bg-blue-white'>
        <h1 className='flex gap-4 items-center text-blue-label font-latoB'>
          {" "}
          <DownloadIcon />
          Download
        </h1>
        <div className='p-4 flex gap-3 items-center rounded-xl bg-blue-secondary'>
          <div>Bar Graph</div>
          <div className='ml-auto'>
            <span className='font-bold text-[30px]'>$200</span>
            <p className='flex gap-1 items-center text-blue-primary'>
              <EarningIcon /> 30.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
