import React from 'react';
import { AddIcon } from '~/app/presentation/components/icons';

export interface AddProps {
  fill?: string;
  size?: number;
}

function Icon({ fill = '#111111', size = 18 }: AddProps) {
  const height = 324 / size;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 18 18'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M2.133 7.855a1.144 1.144 0 100 2.29h5.722v5.722a1.144 1.144 0 002.29 0v-5.723h5.722a1.144 1.144 0 100-2.289h-5.723V2.133a1.144 1.144 0 10-2.289 0v5.722H2.133z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default Icon;
