
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAkt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.428 14.143 12 18.428h5.143l-2.572-4.285z" opacity=".6"/><path fill="currentColor" d="m9 5.143 8.156 13.285 2.558-4.444-5.597-8.841z"/><path fill="currentColor" d="m6.986 9.429-2.7 4.5 2.7 4.5 5.443-9z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AKT__a)"><path fill="url(#AKT__b)" d="M0 0h24v24H0z"/><path fill="#DB4533" d="m9 5.143 8.156 13.285 2.558-4.444-5.597-8.841z"/><path fill="#A12E2A" d="m9.429 14.143 2.57 4.285h5.144l-2.572-4.285z"/><path fill="#DB4533" d="m6.986 9.429-2.7 4.5 2.7 4.5 5.443-9z"/></g><defs><linearGradient id="AKT__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="AKT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAkt.displayName = 'Akt';

export default IconAkt;
