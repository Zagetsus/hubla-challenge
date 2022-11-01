import React from 'react';

export interface BellIcon {
  fill?: string;
  size?: number;
}

function Bell({ fill = '#333333', size = 16 }: BellIcon) {
  const height = 320 / 16;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 16 20'
    >
      <path
        fill={fill}
        stroke='#fff'
        strokeWidth='0.5'
        d='M14 11.18l-.083.236A2.75 2.75 0 0115.75 14s0 0 0 0v2a.75.75 0 01-.75.75h-3.331l-.05.184a3.75 3.75 0 01-7.238 0l-.05-.184H1A.75.75 0 01.25 16v-2a2.75 2.75 0 011.833-2.584l.167-.06V8s0 0 0 0a5.75 5.75 0 014.792-5.663L7.25 2.3V1a.75.75 0 011.5 0V2.301l.208.035A5.75 5.75 0 0113.75 8v3.18H14zm-2 .07h.25V8a4.25 4.25 0 00-8.5 0v3.25H12zm-5.72 5.5h-.433l.216.375a2.25 2.25 0 001.935 1.125h.004a2.25 2.25 0 001.935-1.125l.216-.375H6.28zm7.72-1.5h.25V14A1.25 1.25 0 0013 12.75H3A1.25 1.25 0 001.75 14v1.25H14z'
      />
    </svg>
  );
}

export default Bell;
