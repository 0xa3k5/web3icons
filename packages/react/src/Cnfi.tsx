
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCnfi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.143 5.143c-3.386.428-6 3.334-6 6.857s2.614 6.429 6 6.857V17.07a5.143 5.143 0 0 1 0-10.14zm1.714 13.714c3.386-.428 6-3.334 6-6.857s-2.614-6.429-6-6.857V6.93a5.14 5.14 0 0 1 3.446 2.254c.056.279.004.695-.343.93a.94.94 0 0 1-1.088 0v.009a3.428 3.428 0 1 0-.078 3.866v.017a.986.986 0 0 1 1.248-.176.83.83 0 0 1 .385.793 5.15 5.15 0 0 1-3.57 2.447zM16.715 12A.857.857 0 1 1 15 12a.857.857 0 0 1 1.715 0"/>

        </>
      ) : (
        <>
          
    <path fill="url(#CNFI__a)" d="M11.143 5.143c-3.386.428-6 3.334-6 6.857s2.614 6.429 6 6.857V17.07a5.143 5.143 0 0 1 0-10.14zm1.714 13.714c3.386-.428 6-3.334 6-6.857s-2.614-6.429-6-6.857V6.93a5.14 5.14 0 0 1 3.446 2.254c.055.279.004.695-.343.93a.94.94 0 0 1-1.089 0v.009a3.429 3.429 0 1 0-.077 3.866v.017a.986.986 0 0 1 1.247-.176.83.83 0 0 1 .386.793 5.15 5.15 0 0 1-3.57 2.447zM16.714 12a.857.857 0 1 1-1.715 0 .857.857 0 0 1 1.715 0"/>
    <defs>
        <linearGradient id="CNFI__a" x1="7.144" x2="17.374" y1="6.913" y2="15.206" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5300"/>
            <stop offset="1" stopColor="#FBB705"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconCnfi.displayName = 'Cnfi';

export default IconCnfi;
