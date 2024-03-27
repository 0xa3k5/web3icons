
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBtse = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.695 15.857c1.09 0 1.719-.552 1.719-1.285 0-.68-.555-1.286-1.756-1.286h-2.372v2.571zm-.48-5.143c1.09 0 1.663-.553 1.663-1.285 0-.68-.592-1.286-1.664-1.286h-1.928v2.571zM6.856 5.572h6.207c1.627 0 2.773.561 3.53 1.294.518.502.832 1.163.832 2.022v.035c0 1.45-.85 2.307-1.995 2.79C17 12.216 18 13.074 18 14.774v.035c0 2.147-1.812 3.62-4.899 3.62H6.857z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BTSE__a)" d="M12.695 15.857c1.091 0 1.72-.552 1.72-1.285 0-.68-.555-1.286-1.757-1.286h-2.372v2.571zm-.48-5.143c1.09 0 1.663-.553 1.663-1.285 0-.68-.591-1.286-1.663-1.286h-1.929v2.571zM6.857 5.572h6.208c1.626 0 2.773.561 3.53 1.294.518.502.832 1.163.832 2.022v.035c0 1.45-.85 2.307-1.996 2.79 1.571.502 2.57 1.36 2.57 3.06v.035c0 2.147-1.812 3.62-4.9 3.62H6.858z"/>
    <defs>
        <linearGradient id="BTSE__a" x1="7.753" x2="18.069" y1="5.112" y2="18.316" gradientUnits="userSpaceOnUse">
            <stop stopColor="#007CD0"/>
            <stop offset="1" stopColor="#004EAE"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBtse.displayName = 'Btse';

export default IconBtse;
