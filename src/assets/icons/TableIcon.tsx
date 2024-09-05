import React from 'react';
import { IconsProps } from './Icons';

export const TableIcon = ({
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
      <path d="M17.498 17.828h-1.85c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.85c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.97 17.828H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.47a.749.749 0 1 1 0 1.5ZM17.499 14.07h-5.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.53c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.27 14.07H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.77c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="currentColor"></path><path opacity=".4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor"></path> 
    </svg>
  );
};