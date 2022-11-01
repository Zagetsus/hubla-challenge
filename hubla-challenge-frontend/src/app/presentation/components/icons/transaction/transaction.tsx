import React from 'react';

export interface TransactionProps {
  fill?: string;
  size?: number;
}

function Transaction({ fill = '#333333', size = 16 }: TransactionProps) {
  const height = 288 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 16 18'
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.571 6.714h5.715M4.57 9h6.857m-6.857 2.286H8m6.857 3.428V3.286A2.286 2.286 0 0012.571 1H3.43a2.286 2.286 0 00-2.286 2.286v11.428A2.286 2.286 0 003.429 17h9.142a2.285 2.285 0 002.286-2.286v0z'
      />
    </svg>
  );
}

export default Transaction;
