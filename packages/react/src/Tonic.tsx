
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTonic = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6 6.429h7.714v3.428H6zm8.571 0H18v3.428h-3.429zm-.857 4.285h-3.428v8.572h3.428z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#TONIC__a)" d="M6 6.429h7.714v3.428H6zm8.571 0H18v3.428h-3.429zm-.857 4.285h-3.428v8.572h3.428z"/>
    <defs>
        <linearGradient id="TONIC__a" x1="12" x2="12" y1="6.429" y2="19.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000D34"/>
            <stop offset="1" stopColor="#42243D"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconTonic.displayName = 'Tonic';

export default IconTonic;
