
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRfox = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.429 11.447V6l2.7 2.786zm7.56-2.018h-3.968l2.022 8.467zm-4.535.024 2.396 9.833-5.004-7.278zm5.092 0-2.395 9.833 5.003-7.278zm3.026 1.994V6l-2.7 2.786z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#RFOX__a)" d="M6.429 11.447V6l2.7 2.786zm7.56-2.018h-3.968l2.022 8.467zm-4.535.024 2.396 9.833-5.004-7.278zm5.092 0-2.395 9.833 5.003-7.278zm3.026 1.994V6l-2.7 2.786z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="RFOX__a" x1="6.518" x2="17.362" y1="11.734" y2="11.734" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AF0607"/>
            <stop offset=".495" stopColor="#ED1C24"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconRfox.displayName = 'Rfox';

export default IconRfox;
