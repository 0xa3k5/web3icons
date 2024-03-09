
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArea = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 4.286-3.857 6h1.928L12 7.054l1.929 3.232h1.928zM12 20.571l-3.857-6h1.928L12 17.803l1.929-3.232h1.928zM7.5 11.571 6 13.286h12l-1.5-1.715z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AREA__a)"><path fill="url(#AREA__b)" d="M0 0h24v24H0z"/><path fill="#B8A874" d="m12 4.286-3.857 6h1.928L12 7.054l1.929 3.232h1.928z"/><path fill="#A0857C" d="m12 20.571-3.857-6h1.928L12 17.803l1.929-3.232h1.928z"/><path fill="#A4A4A4" d="M7.5 11.571 6 13.286h12l-1.5-1.715z"/></g><defs><linearGradient id="AREA__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="AREA__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconArea.displayName = 'Area';

export default IconArea;
