
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArrr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.429 9A2.57 2.57 0 0 1 9 6.428h6.429c.608 0 1.165.215 1.607.566l-3.064 1.577H9.857A.857.857 0 0 0 9 9.428v1.706l-2.57 1.329zm0 6.056v3.373h1.5A1.07 1.07 0 0 0 9 17.357v-1.928h6.429A2.57 2.57 0 0 0 18 12.857V9.09l-2.571 1.329v2.01a.857.857 0 0 1-.857.857h-4.71z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#ARRR__a)" d="M6.429 9A2.57 2.57 0 0 1 9 6.428h6.429c.608 0 1.165.215 1.607.566l-3.064 1.577H9.857A.857.857 0 0 0 9 9.428v1.706l-2.57 1.329zm0 6.056v3.373h1.5A1.07 1.07 0 0 0 9 17.357v-1.928h6.429A2.57 2.57 0 0 0 18 12.857V9.09l-2.571 1.329v2.01a.857.857 0 0 1-.857.857h-4.71z"/>
    <defs>
        <linearGradient id="ARRR__a" x1="7.255" x2="17.25" y1="7.393" y2="18.067" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BF9B41"/>
            <stop offset="1" stopColor="#E2C97E"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconArrr.displayName = 'Arrr';

export default IconArrr;
