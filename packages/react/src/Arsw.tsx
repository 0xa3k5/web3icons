
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArsw = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6 16.449 6.643 18C7.843 14.1 10.5 9.142 12 6.707c1.5 2.435 4.5 7.749 5.357 11.293L18 16.45c-.343-1.77-3.643-9.3-6-11.735C9.857 7.15 6.857 13.942 6 16.45m6-5.092C10.971 12.952 9.57 16.45 9 18l-.643-1.77C8.786 14.68 10.93 10.47 12 8.923c1.286 1.547 3.429 5.979 3.643 7.307L15 17.777c-.429-1.328-1.929-4.65-3-6.42m-.643 6.202.643-.887.643.887.643-.887c0-.665-.857-2.216-1.286-2.658-.429.442-1.286 2.126-1.286 2.658z"/>
        </>
      ) : (
        <>
          <path fill="url(#ARSW__a)" d="M6 16.449 6.643 18C7.843 14.1 10.5 9.142 12 6.707c1.5 2.435 4.5 7.749 5.357 11.293L18 16.45c-.343-1.77-3.643-9.3-6-11.735C9.857 7.15 6.857 13.942 6 16.45m6-5.092C10.971 12.952 9.57 16.45 9 18l-.643-1.77C8.786 14.68 10.93 10.47 12 8.923c1.286 1.547 3.429 5.979 3.643 7.307L15 17.777c-.429-1.328-1.929-4.65-3-6.42m-.643 6.202.643-.887.643.887.643-.887c0-.665-.857-2.216-1.286-2.658-.429.442-1.286 2.126-1.286 2.658z"/><defs><linearGradient id="ARSW__a" x1="12" x2="12" y1="4.714" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#00EBE4"/><stop offset="1" stopColor="#009EF8"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconArsw.displayName = 'Arsw';
IconArsw.variants = 'brandedmono';

export default IconArsw;
