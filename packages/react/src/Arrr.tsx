
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArrr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.428 9A2.57 2.57 0 0 1 9 6.428h6.429c.608 0 1.165.215 1.607.566L13.97 8.571H9.857A.857.857 0 0 0 9 9.428v1.706l-2.572 1.329zm0 6.056v3.373h1.5A1.07 1.07 0 0 0 9 17.357v-1.928h6.429a2.57 2.57 0 0 0 2.57-2.572V9.09l-2.57 1.329v2.01a.857.857 0 0 1-.858.857h-4.71z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ARRR__a)"><path fill="url(#ARRR__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M6.428 9A2.57 2.57 0 0 1 9 6.428h6.429c.608 0 1.165.215 1.607.566L13.97 8.571H9.857A.857.857 0 0 0 9 9.428v1.706l-2.572 1.329zm0 6.056v3.373h1.5A1.07 1.07 0 0 0 9 17.357v-1.928h6.429a2.57 2.57 0 0 0 2.57-2.572V9.09l-2.57 1.329v2.01a.857.857 0 0 1-.858.857h-4.71z"/></g><defs><linearGradient id="ARRR__b" x1="1.714" x2="21.643" y1="1.929" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#BF9B41"/><stop offset="1" stopColor="#E2C97E"/></linearGradient><clipPath id="ARRR__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconArrr.displayName = 'Arrr';

export default IconArrr;
