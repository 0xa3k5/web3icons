
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDpay = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.857 12.857a3.94 3.94 0 0 1-3.793 3H6.857v3h5.207a6.86 6.86 0 0 0 6.793-6zm-9-7.714h5.207a6.86 6.86 0 0 1 6.793 6h-3a3.94 3.94 0 0 0-3.793-3H6.857zm0 4.714h3v1.286h-3zm0 3h3v1.286h-3z"/>

        </>
      ) : (
        <>
          
    <path fill="#7859E5" d="M15.857 12.857a3.94 3.94 0 0 1-3.792 3H6.857v3h5.208a6.86 6.86 0 0 0 6.792-6zm-9-7.714h5.208a6.86 6.86 0 0 1 6.792 6h-3a3.94 3.94 0 0 0-3.792-3H6.857zm0 4.714h3v1.286h-3zm0 3h3v1.286h-3z"/>

        </>
      )}
    </BaseIcon>
));

IconDpay.displayName = 'Dpay';

export default IconDpay;
