import React from 'react';

export interface UserCheckProps {
  fill?: string;
  size?: number;
}

function UserCheck({ fill = '#333333', size = 21 }: UserCheckProps) {
  const height = 378 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 21 18'
    >
      <path
        fill={fill}
        stroke='#fff'
        strokeWidth='0.5'
        d='M11.136 9.031l-.295.256.356.16A7.75 7.75 0 0115.75 16.5a.75.75 0 01-1.5 0 6.25 6.25 0 00-12.5 0 .75.75 0 01-1.5 0 7.75 7.75 0 014.553-7.052l.356-.161-.295-.256A4.67 4.67 0 013.25 5.5a4.75 4.75 0 119.5 0 4.67 4.67 0 01-1.614 3.531zm8.396-2.725h0a.75.75 0 01-.029 1.088h0l-.01.01-2.67 2.669s0 0 0 0a.75.75 0 01-1.056 0s0 0 0 0l-1.34-1.34s0 0 0 0a.75.75 0 010-1.057h0a.75.75 0 011.065 0s0 0 0 0l.62.63.177.179.178-.178 2-2v-.001a.75.75 0 011.066 0zM6.194 8.202a3.25 3.25 0 103.612-5.404 3.25 3.25 0 00-3.612 5.404z'
      />
    </svg>
  );
}

export default UserCheck;
