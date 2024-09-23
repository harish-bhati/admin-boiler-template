import React from 'react';
import { IconsProps } from './Icons';

export const TaskIcon = ({
  className,
  fill,
  width,
  height,
  viewBox,
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      width={width ? width : '24'}
      height={height ? height : '24'}
      fill={fill ? fill : 'none'}
    >
     <path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#107d4f" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
     <path d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01" stroke="#107d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};