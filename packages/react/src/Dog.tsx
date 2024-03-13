
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDog = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.285 18.857v-6H5.57v-1.714h1.714v-6h4.711c4.113 0 6.14 3.032 5.997 6.89-.143 3.82-1.764 6.824-5.996 6.824zm1.713-12v4.286h3.427v1.714H8.998v4.286h2.998c3.29 0 4.176-2.264 4.284-5.175.109-2.903-1.141-5.11-4.284-5.11z"/>
        </>
      ) : (
        <>
          <path fill="#C3A634" d="M7.285 18.857v-6H5.57v-1.714h1.714v-6h4.711c4.113 0 6.14 3.032 5.997 6.89-.143 3.82-1.764 6.824-5.996 6.824zm1.713-12v4.286h3.427v1.714H8.998v4.286h2.998c3.29 0 4.176-2.264 4.284-5.175.109-2.903-1.141-5.11-4.284-5.11z"/>
        </>
      )}
    </BaseIcon>
));

IconDog.displayName = 'Dog';

export default IconDog;
