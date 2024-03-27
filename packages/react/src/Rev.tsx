
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRev = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m10.299 5.143 6.415 3.643v3L13.8 13.355l3.343 2.502v3.429l-6-4.5v-3l2.923-1.573-3.767-2.126v9.056l-2.585 2.143V6.429l2.58-1.286z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#REV__a)" d="m10.298 5.143 6.416 3.643v3L13.8 13.355l3.342 2.502v3.429l-6-4.5v-3l2.923-1.573-3.767-2.126v9.056l-2.584 2.143V6.429l2.58-1.286z"/>
    <defs>
        <linearGradient id="REV__a" x1="7.125" x2="20.906" y1="4.512" y2="13.545" gradientUnits="userSpaceOnUse">
            <stop offset=".06" stopColor="#1A1C3C"/>
            <stop offset="1" stopColor="#720044"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconRev.displayName = 'Rev';

export default IconRev;
