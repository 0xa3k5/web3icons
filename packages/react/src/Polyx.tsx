
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPolyx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.784 12c.84 0 1.787-.356 1.787-1.286 0-.895-.908-1.285-1.787-1.285h-2.498v-.857h2.631c1.38 0 2.512.698 2.512 2.142 0 1.445-1.187 2.143-2.512 2.143h-1.774v3h-.857V12z"/>
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#POLYX__a)" d="M12.784 12c.84 0 1.787-.356 1.787-1.286 0-.895-.909-1.285-1.787-1.285h-2.499v-.857h2.632c1.38 0 2.511.698 2.511 2.142 0 1.445-1.187 2.143-2.511 2.143h-1.775v3h-.857V12z"/>
    <path fill="url(#POLYX__b)" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="POLYX__a" x1="90.382" x2="90.339" y1="4.431" y2="32.52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF2E72"/>
            <stop offset=".93" stopColor="#4A125E"/>
        </linearGradient>
        <linearGradient id="POLYX__b" x1="12" x2="12" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF2E72"/>
            <stop offset="1" stopColor="#631661"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconPolyx.displayName = 'Polyx';

export default IconPolyx;
