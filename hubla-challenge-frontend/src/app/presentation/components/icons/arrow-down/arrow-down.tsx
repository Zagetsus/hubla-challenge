import React, { SVGProps } from 'react';

export type ArrowDownProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  size?: number;
};

function ArrowDown({ fill = '#333333', size = 12, ...rest }: ArrowDownProps) {
  const height = 96 / size;

  return (
    <svg
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 12 8'
    >
      <path
        fill='#333'
        stroke='#fff'
        strokeWidth='0.5'
        d='M6.533 6.653v.001a.75.75 0 01-1.066 0h0l-4.24-4.24s0 0 0 0a.75.75 0 01-.217-.533V1.88a.75.75 0 01.217-.532.75.75 0 011.057 0l3.54 3.54.176.177.177-.177 3.54-3.54s0 0 0 0a.75.75 0 011.057 0h0a.75.75 0 010 1.066h0l-4.24 4.24z'
      />
    </svg>
  );
}

export default ArrowDown;
