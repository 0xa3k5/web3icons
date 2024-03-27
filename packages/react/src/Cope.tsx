
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCope = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.571 12a1.286 1.286 0 1 1 2.572 0 1.286 1.286 0 0 1-2.572 0m5.143 0a1.286 1.286 0 1 1 2.572 0 1.286 1.286 0 0 1-2.572 0m6.429-1.286a1.286 1.286 0 1 0 0 2.572 1.286 1.286 0 0 0 0-2.572"/>

        </>
      ) : (
        <>
          
    <path fill="url(#COPE__a)" d="M5.571 12a1.286 1.286 0 1 1 2.572 0 1.286 1.286 0 0 1-2.572 0m5.143 0a1.286 1.286 0 1 1 2.572 0 1.286 1.286 0 0 1-2.572 0m6.429-1.286a1.286 1.286 0 1 0 0 2.572 1.286 1.286 0 0 0 0-2.572"/>
    <defs>
        <linearGradient id="COPE__a" x1="17.143" x2="17.143" y1="10.714" y2="13.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8B8B8"/>
            <stop offset="1" stopColor="#fff"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconCope.displayName = 'Cope';

export default IconCope;
