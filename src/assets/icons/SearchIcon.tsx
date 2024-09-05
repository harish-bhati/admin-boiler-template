import React from 'react';
import { IconsProps } from './Icons';

export const SearchIcon = ({
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
      width={width ? width : '16'}
      height={height ? height : '16'}
      fill={fill ? fill : 'none'}
    >
      <path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );
};