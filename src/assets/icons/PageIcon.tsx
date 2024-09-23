import React from 'react';
import { IconsProps } from './Icons';

export const PageIcon = ({
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
     <path d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" stroke="#de7700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
     <path d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5" stroke="#de7700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};