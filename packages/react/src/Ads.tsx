
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAds = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.429 6h3v7.5h-.005a4.285 4.285 0 0 1-7.067 3.043 4.47 4.47 0 0 1-1.573-3.03v-.647a1.286 1.286 0 1 0-.33 1.354 4.93 4.93 0 0 0 1.522 2.614 4.286 4.286 0 1 1 .385-6.805 4.53 4.53 0 0 1 1.445 2.185c.098.343.051.716.051 1.072a1.286 1.286 0 1 0 2.572 0z"/><path fill="currentColor" d="M15 9.086a4.3 4.3 0 0 0-3.287.668 4.93 4.93 0 0 1 1.568 2.58A1.28 1.28 0 0 1 15 12.326z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ADS__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="#5FB1FA" d="M15.429 6h3v7.5h-.005a4.285 4.285 0 0 1-7.067 3.043 4.47 4.47 0 0 1-1.573-3.03v-.647a1.286 1.286 0 1 0-.33 1.354 4.93 4.93 0 0 0 1.522 2.614 4.286 4.286 0 1 1 .385-6.805 4.53 4.53 0 0 1 1.445 2.185c.098.343.051.716.051 1.072a1.286 1.286 0 1 0 2.572 0z"/><path fill="#5FB1FA" d="M15 9.086a4.3 4.3 0 0 0-3.287.668 4.93 4.93 0 0 1 1.568 2.58A1.28 1.28 0 0 1 15 12.326z"/></g><defs><clipPath id="ADS__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAds.displayName = 'Ads';

export default IconAds;
