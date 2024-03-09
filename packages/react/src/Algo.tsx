
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAlgo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m7.364 18 5.873-10.162.707 2.63L9.597 18h2.225l2.824-4.888L15.964 18h1.994l-1.95-7.262 1.384-2.595h-2.026l-.862-3H12.56L5.14 18z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ALGO__a)"><path fill="url(#ALGO__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="m7.364 18 5.873-10.162.707 2.63L9.597 18h2.225l2.824-4.888L15.964 18h1.994l-1.95-7.262 1.384-2.595h-2.026l-.862-3H12.56L5.14 18z"/></g><defs><linearGradient id="ALGO__b" x1="4.465" x2="29.206" y1="4.162" y2="32.579" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="ALGO__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAlgo.displayName = 'Algo';

export default IconAlgo;
