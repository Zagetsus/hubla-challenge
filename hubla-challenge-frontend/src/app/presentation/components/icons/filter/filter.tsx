import React from 'react';

export interface FilterProps {
  fill?: string;
  size?: number;
}

function Filter({ fill = '#000000', size = 22 }: FilterProps) {
  const height = 528 / size;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={height}
      fill='none'
      viewBox='0 0 22 24'
    >
      <path
        fill={fill}
        d='M9.078 17.526l1.587 1.372a.843.843 0 01-.164 1.382.825.825 0 01-.917-.112l-1.878-1.622a.84.84 0 01-.29-.636V9.526l-7.01-8.14C-.065.844.32 0 1.032 0h19.934c.713 0 1.095.845.628 1.386l-7.02 8.14v13.636a.834.834 0 01-.83.838.834.834 0 01-.83-.838V9.214a.84.84 0 01.203-.55l6.028-6.99H2.852l6.022 6.99a.84.84 0 01.204.55v8.312z'
      />
    </svg>
  );
}

export default Filter;
