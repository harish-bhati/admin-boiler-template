import React from 'react';
import { IconsProps } from './Icons';

export const DataIcon = ({
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
      width={width ? width : '20'}
      height={height ? height : '20'}
      fill={fill ? fill : 'none'}
    >
      <path d="M19.9 13.5H4.1c-1.5 0-2.1.64-2.1 2.23v4.04C2 21.36 2.6 22 4.1 22h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23Z" fill="currentColor"></path><path opacity=".4" d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23v4.04c0 1.59.6 2.23 2.1 2.23h8.8c1.5 0 2.1-.64 2.1-2.23V4.23C15 2.64 14.4 2 12.9 2Z" fill="currentColor"></path>
    </svg>
  );
};