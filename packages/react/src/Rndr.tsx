
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRndr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 5.572a6.428 6.428 0 1 1-5.186 2.631A1.281 1.281 0 0 0 9 7.286a1.286 1.286 0 1 0-2.447.549A6.857 6.857 0 1 0 12 5.143zM7.714 8.143a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#RNDR__a)" d="M12 5.572a6.428 6.428 0 1 1-5.186 2.631A1.281 1.281 0 0 0 9 7.286a1.286 1.286 0 1 0-2.447.549A6.857 6.857 0 1 0 12 5.143zM7.714 8.143a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="RNDR__a" x1="12" x2="12" y1="5.143" y2="18.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E92121"/>
            <stop offset="1" stopColor="#9C0403"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconRndr.displayName = 'Rndr';

export default IconRndr;
