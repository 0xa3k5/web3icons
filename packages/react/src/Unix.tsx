
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconUnix = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 19.286c-3.806 0-6-1.976-6-5.833V6.429h3.429v6.908c0 1.715.664 2.949 2.571 2.949 1.899 0 2.571-1.252 2.571-2.949V6.43H18v7.024c0 3.857-2.194 5.833-6 5.833"/>
    <path fill="currentColor" d="M12 15.857a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"/>

        </>
      ) : (
        <>
          
    <path fill="url(#UNIX__a)" d="M12 19.286c-3.806 0-6-1.976-6-5.833V6.429h3.429v6.908c0 1.715.664 2.949 2.571 2.949 1.899 0 2.571-1.252 2.571-2.949V6.43H18v7.024c0 3.857-2.194 5.833-6 5.833"/>
    <path fill="url(#UNIX__b)" d="M12 15.857a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"/>
    <defs>
        <linearGradient id="UNIX__a" x1="17.786" x2="6" y1="13.431" y2="13.431" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BD106A"/>
            <stop offset="1" stopColor="#7D00BC"/>
        </linearGradient>
        <linearGradient id="UNIX__b" x1="14.067" x2="9.857" y1="13.905" y2="13.905" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BD106A"/>
            <stop offset="1" stopColor="#7D00BC"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconUnix.displayName = 'Unix';

export default IconUnix;
