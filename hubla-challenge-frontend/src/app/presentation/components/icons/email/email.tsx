import React from 'react';

export interface EmailProps {
  fill?: string;
  size?: number;
}

function Email({ fill = '#000', size = 19 }: EmailProps) {
  const height = 304 / size;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 19 16'
    >
      <path
        fill={fill}
        d='M3 .5h13a3 3 0 013 3v9a3 3 0 01-3 3H3a3 3 0 01-3-3v-9a3 3 0 013-3zm0 1c-.47 0-.924.164-1.283.466L9.5 7.02l7.783-5.054A1.992 1.992 0 0016 1.5H3zm6.5 6.712L1.134 2.78C1.045 3.01 1 3.254 1 3.5v9a2 2 0 002 2h13a2 2 0 002-2v-9c0-.254-.047-.497-.134-.72L9.5 8.211v.001z'
      />
    </svg>
  );
}

export default Email;
