import React from 'react';
import { IconsProps } from './Icons';

export const FormIcon = ({
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
      <path d="M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z" fill="currentColor"></path><path opacity=".4" d="M6.5 20h6V4h-6c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4ZM18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4Z" fill="currentColor"></path><path d="M5.75 13c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.16-.21-.22-.33a.986.986 0 0 1-.07-.38c0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.34-.07.68.04.91.27.18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08ZM9.25 13c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21a.99.99 0 0 1-.21-1.09c.05-.13.12-.23.21-.33.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38s-.12.23-.21.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08Z" fill="currentColor"></path>
    </svg>
  );
};