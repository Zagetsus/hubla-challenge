import React from 'react';

export interface Output {
  fill?: string;
  size?: number;
}

function Output({ fill = '#333333', size = 20 }: Output) {
  const height = 360 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 20 18'
    >
      <path
        fill={fill}
        d='M8.614 3.596l.486-.53v3.231a.9.9 0 101.8 0V3.065l.486.495a.9.9 0 001.315.036.9.9 0 000-1.278L10.639.257a.9.9 0 00-.297-.19.9.9 0 00-.684 0 .9.9 0 00-.297.19L7.299 2.282a.93.93 0 001.315 1.314zM10 8.998a2.7 2.7 0 100 5.401 2.7 2.7 0 000-5.401zm0 3.6a.9.9 0 110-1.799.9.9 0 010 1.8zm-6.301-.9a.9.9 0 101.8 0 .9.9 0 00-1.8 0zm12.603 0a.9.9 0 10-1.8 0 .9.9 0 001.8 0zm.9-6.301H13.6a.9.9 0 000 1.8h3.6a.9.9 0 01.901.9V15.3a.9.9 0 01-.9.9H2.798a.9.9 0 01-.9-.9V8.098a.9.9 0 01.9-.9H6.4a.9.9 0 000-1.801H2.8a2.7 2.7 0 00-2.701 2.7V15.3A2.7 2.7 0 002.798 18h14.404a2.7 2.7 0 002.7-2.7V8.097a2.7 2.7 0 00-2.7-2.701z'
      />
    </svg>
  );
}

export default Output;
