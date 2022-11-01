import React from 'react';

export interface EntryProps {
  fill?: string;
  size?: number;
}

function Entry({ fill = '#333333', size = 21 }: EntryProps) {
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
        d='M10.5 9a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm0 3.6a.9.9 0 110-1.8.9.9 0 010 1.8zm-.639-5.661a.9.9 0 00.297.189.846.846 0 00.684 0 .9.9 0 00.297-.189L13.2 4.914A.93.93 0 0011.886 3.6l-.486.531V.9a.9.9 0 10-1.8 0v3.231L9.114 3.6A.93.93 0 107.8 4.914l2.061 2.025zm6.94 4.761a.9.9 0 10-1.8 0 .9.9 0 001.8 0zm.9-6.3H15a.9.9 0 000 1.8h2.7a.9.9 0 01.9.9v7.2a.9.9 0 01-.9.9H3.3a.9.9 0 01-.9-.9V8.1a.9.9 0 01.9-.9H6a.9.9 0 000-1.8H3.3A2.7 2.7 0 00.6 8.1v7.2A2.7 2.7 0 003.3 18h14.4a2.7 2.7 0 002.7-2.7V8.1a2.7 2.7 0 00-2.7-2.7zM4.2 11.7A.9.9 0 106 11.7a.9.9 0 00-1.8 0z'
      />
    </svg>
  );
}

export default Entry;
