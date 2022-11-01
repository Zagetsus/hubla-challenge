import React from 'react';

export interface HomeProps {
  fill?: string;
  size?: number;
}

function Home({ fill = '#333333', size = 18 }: HomeProps) {
  const height = 378 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 18 21'
    >
      <path
        fill={fill}
        stroke='#fff'
        strokeWidth='0.5'
        d='M10.833 1.926h0l.002.002 5.998 5.258.001.001a2.75 2.75 0 01.916 2.062V18A2.75 2.75 0 0115 20.75H3A2.75 2.75 0 01.25 18V9.258a2.75 2.75 0 01.916-2.07l5.999-5.26h0l.002-.002a2.75 2.75 0 013.666 0zM11 19.25h.25V14A1.25 1.25 0 0010 12.75H8A1.25 1.25 0 006.75 14v5.25H11zm1.75-.25v.25H15A1.25 1.25 0 0016.25 18V9.25v0a1.25 1.25 0 00-.425-.938h0l-6-5.25s0 0 0 0a1.25 1.25 0 00-1.65 0s0 0 0 0l-6 5.25h0a1.25 1.25 0 00-.425.938V18A1.25 1.25 0 003 19.25h2.25V14A2.75 2.75 0 018 11.25h2A2.75 2.75 0 0112.75 14v5z'
      />
    </svg>
  );
}

export default Home;
