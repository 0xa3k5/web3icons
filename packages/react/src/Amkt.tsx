
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAmkt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.073 7.577c-2.645 0-4.787 2.057-4.787 4.594 0 2.306 1.774 4.218 4.084 4.543l4.453-7.401a4.86 4.86 0 0 0-3.75-1.736"/><path fill="currentColor" d="m14.04 7.286-1.217 2.027 4.448 7.401h2.443z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AMKT__a)"><path fill="url(#AMKT__b)" d="M0 0h24v24H0z"/><path fill="#F0F3FA" d="M9.073 7.577c-2.645 0-4.787 2.057-4.787 4.594 0 2.306 1.774 4.218 4.084 4.543l4.453-7.401a4.86 4.86 0 0 0-3.75-1.736"/><path fill="#F0F3FA" d="m14.04 7.286-1.217 2.027 4.448 7.401h2.443z"/></g><defs><linearGradient id="AMKT__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="AMKT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAmkt.displayName = 'Amkt';

export default IconAmkt;
