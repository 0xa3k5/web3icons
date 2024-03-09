
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAcria = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.715 10.286h-1.93L12 5.143l4.072 7.286H9.643L8.143 15h1.5l1.286-2.143h2.143L14.357 15h1.715l-1.286-2.143H16.5l2.357 3.857h-5.571L12 14.143l-1.286 2.571h-5.57l3.428-6h4.714L12 8.143z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ACRIA__a)"><path fill="url(#ACRIA__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M10.715 10.286h-1.93L12 5.143l4.072 7.286H9.643L8.143 15h1.5l1.286-2.143h2.143L14.357 15h1.715l-1.286-2.143H16.5l2.357 3.857h-5.571L12 14.143l-1.286 2.571h-5.57l3.428-6h4.714L12 8.143z"/></g><defs><linearGradient id="ACRIA__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="ACRIA__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAcria.displayName = 'Acria';

export default IconAcria;
