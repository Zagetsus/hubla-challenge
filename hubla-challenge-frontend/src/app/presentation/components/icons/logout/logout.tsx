import React from 'react';

interface LogoutProps {
  fill?: string;
}

function Logout({ fill = '#333333' }: LogoutProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='20'
      fill='none'
      viewBox='0 0 16 20'
    >
      <path
        fill={fill}
        stroke='#fff'
        strokeWidth='0.5'
        d='M8.766 11.177l.43-.427H1a.75.75 0 110-1.5h8.195l-.429-.427-2.3-2.29s0 0 0 0a.754.754 0 011.067-1.066l3.998 3.998a.75.75 0 01.156.245h0l.002.005a.75.75 0 010 .57h0l-.002.005a.751.751 0 01-.156.245l-3.998 3.998h0a.75.75 0 01-1.066 0h0a.75.75 0 010-1.066h0l2.3-2.29zM3 .25h10A2.75 2.75 0 0115.75 3v14A2.75 2.75 0 0113 19.75H3A2.75 2.75 0 01.25 17v-3a.75.75 0 111.5 0v3A1.25 1.25 0 003 18.25h10A1.25 1.25 0 0014.25 17V3A1.25 1.25 0 0013 1.75H3A1.25 1.25 0 001.75 3v3a.75.75 0 01-1.5 0V3A2.75 2.75 0 013 .25z'
      />
    </svg>
  );
}

export default Logout;
