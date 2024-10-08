import React from 'react';
import { IconsProps } from './Icons';

export const DownloadIcon = ({
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
     <path d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87" stroke="#d31c1c" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
     <path d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75" stroke="#d31c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};