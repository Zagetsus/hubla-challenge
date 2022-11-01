import React from 'react';

export interface ClosedProps {
  fill?: string;
  size?: number;
}

function Closed({ fill = '#3F0B6D', size = 21 }: ClosedProps) {
  const height = 462 / size;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 21 22'
    >
      <path
        fill={fill}
        d='M12.41 11l8.29-8.29a1 1 0 00-1.41-1.41L11 9.59l-8.29-8.3a1.004 1.004 0 00-1.42 1.42L9.59 11l-8.3 8.29A1 1 0 102.7 20.7l8.3-8.29 8.29 8.29a1 1 0 001.41-1.41L12.41 11z'
      />
    </svg>
  );
}

export default Closed;
