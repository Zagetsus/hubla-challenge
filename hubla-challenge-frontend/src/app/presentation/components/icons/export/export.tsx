import React from 'react';

export interface ExportProps {
  fill?: string;
  size?: number;
}

function Export({ fill = '#000000', size = 14 }: ExportProps) {
  const height = 210 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 14 15'
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13 10v4H1v-4m6-9v10M3 5l4-4 4 4'
      />
    </svg>
  );
}

export default Export;
