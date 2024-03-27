
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKom = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.571 14.297v-1.44L16.286 12l.043 3.189zm-3.552-2.28 4.007-2.331.235-2.379-6.291 2.786v1.924zm5.28 6.84L18 17.786l-8.589-4.954-1.907.985z"/>
    <path fill="currentColor" d="m6 5.944 1.714-.8v11.845L6 17.79zm8.571.25 1.715-1.05v4.53l-1.715.826zM18 6.15l-1.714-1.007v4.5L18 10.5zm-8.571-.206-1.715-.8v11.845l1.715.801z"/>
    <path fill="currentColor" d="M7.714 16.715 6 17.785l1.71 1.072 1.719-1.071zm8.572-7.286L14.57 10.5l1.715 1.072L18 10.5zm-8.572.626 8.572-4.912v2.113L7.714 12z"/>
    <path fill="currentColor" d="M7.714 12 18 17.786v-4.929L16.286 12v3l-6.87-3.956z"/>

        </>
      ) : (
        <>
          
    <path fill="#2891F9" d="M14.571 14.297v-1.44L16.286 12l.043 3.189z"/>
    <path fill="#2B6DEF" d="m11.019 12.017 4.007-2.331.235-2.379-6.291 2.786v1.924zm5.28 6.84L18 17.786l-8.589-4.954-1.907.985z"/>
    <path fill="#2891F9" d="m6 5.944 1.714-.8v11.845L6 17.79zm8.571.25 1.715-1.05v4.53l-1.715.826z"/>
    <path fill="#2BBDF7" d="m18 6.15-1.714-1.007v4.5L18 10.5zm-8.571-.206-1.715-.8v11.845l1.715.801z"/>
    <path fill="#2B6DEF" d="M7.714 16.715 6 17.785l1.71 1.072 1.719-1.071zm8.572-7.286L14.57 10.5l1.715 1.072L18 10.5z"/>
    <path fill="#2891F9" d="m7.714 10.055 8.572-4.912v2.113L7.714 12z"/>
    <path fill="url(#KOM__a)" d="M7.714 12 18 17.786v-4.929L16.286 12v3l-6.87-3.956z"/>
    <defs>
        <linearGradient id="KOM__a" x1="8.781" x2="18.132" y1="13.209" y2="13.209" gradientUnits="userSpaceOnUse">
            <stop offset=".35" stopColor="#2B6DEF"/>
            <stop offset=".76" stopColor="#2BBCF7"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconKom.displayName = 'Kom';

export default IconKom;
