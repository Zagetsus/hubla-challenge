import React from 'react';

interface ClosedEyeProps {
  fill?: string;
}

function ClosedEye({ fill = '#353535' }: ClosedEyeProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='18'
      fill='none'
      viewBox='0 0 22 18'
    >
      <path
        fill={fill}
        d='M1 1.27L2.28 0 19 16.72 17.73 18l-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54L1 1.27zM11 5a3 3 0 012.83 4L10 5.17A3 3 0 0111 5zm0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 01-4 5.19l-1.42-1.43A9.862 9.862 0 0019.82 8 9.821 9.821 0 0011 2.5c-1.09 0-2.16.18-3.16.5L6.3 1.47C7.74.85 9.33.5 11 .5zM2.18 8A9.821 9.821 0 0011 13.5c.69 0 1.37-.07 2-.21L10.72 11A3.064 3.064 0 018 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8z'
      />
    </svg>
  );
}

export default ClosedEye;
