
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconStrax = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.773 5.422a.43.43 0 0 1 .454 0l6.857 4.285a.428.428 0 0 1-.017.737l-6.857 3.858a.43.43 0 0 1-.42 0l-6.218-3.498v1.158L12 15.579l6.647-3.737a.43.43 0 0 1 .639.372v1.929a.43.43 0 0 1-.21.369l-6.857 4.071a.43.43 0 0 1-.429.004L4.933 14.73a.429.429 0 0 1 .42-.746l6.643 3.733 6.433-3.81v-.964L12.21 16.44a.43.43 0 0 1-.42 0l-6.857-3.857a.43.43 0 0 1-.219-.373v-2.143a.43.43 0 0 1 .202-.364l6.857-4.286zm-5.79 4.628L12 13.436l6.017-3.386L12 6.292z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#STRAX__a)" d="M11.772 5.422a.43.43 0 0 1 .455 0l6.857 4.285a.428.428 0 0 1-.017.737l-6.857 3.858a.43.43 0 0 1-.42 0l-6.22-3.498v1.158L12 15.579l6.647-3.737a.43.43 0 0 1 .638.372v1.929a.43.43 0 0 1-.21.369l-6.857 4.071a.43.43 0 0 1-.428.004L4.932 14.73a.429.429 0 0 1 .42-.746l6.643 3.733 6.433-3.81v-.964L12.21 16.44a.43.43 0 0 1-.42 0l-6.858-3.857a.43.43 0 0 1-.218-.373v-2.143a.43.43 0 0 1 .201-.364l6.857-4.286zm-5.79 4.628L12 13.436l6.017-3.386L12 6.292z"/>
    <defs>
        <linearGradient id="STRAX__a" x1="12" x2="12" y1="5.356" y2="18.643" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B71BD"/>
            <stop offset="1" stopColor="#10449E"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconStrax.displayName = 'Strax';

export default IconStrax;
