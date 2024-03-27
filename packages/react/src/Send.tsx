
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSend = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18 9H8.143V6.857h7.667c.728 0 2.19.429 2.19 2.143M8.143 9v1.1c0 .184.107.613.535.613h7.608c.715 0 2.142.27 2.142 1.59v2.756c0 .368-.428 1.654-2.142 1.654H7.714c-.716 0-2.143-.36-2.143-2.121H15.75c.18 0 .536-.223.536-.665V13.5c0-.184-.108-.643-.536-.643H7.07c-.535 0-1.071-.219-1.071-1.101V9z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SEND__a)" d="M18 9H8.143V6.857h7.667c.728 0 2.19.429 2.19 2.143M8.143 9v1.1c0 .184.107.613.535.613h7.608c.715 0 2.142.27 2.142 1.59v2.756c0 .368-.428 1.654-2.142 1.654H7.714c-.716 0-2.143-.36-2.143-2.121H15.75c.18 0 .536-.223.536-.665V13.5c0-.184-.108-.643-.536-.643H7.07c-.535 0-1.071-.219-1.071-1.101V9z"/>
    <defs>
        <linearGradient id="SEND__a" x1="12" x2="12" y1="6.857" y2="16.285" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDF6EB"/>
            <stop offset=".28" stopColor="#CFB89A"/>
            <stop offset=".58" stopColor="#846B52"/>
            <stop offset=".78" stopColor="#AD9173"/>
            <stop offset="1" stopColor="#DFCCAF"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSend.displayName = 'Send';

export default IconSend;
