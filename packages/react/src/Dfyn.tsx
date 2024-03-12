
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDfyn = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.22 13.714H6.857L9 5.143h3.454c1.731 0 2.884 1.568 3.021 3.017.108 1.157-.45 2.773-.74 3.411H18l-8.37 8.572z"/>
        </>
      ) : (
        <>
          <path fill="url(#DFYN__a)" d="M11.22 13.714H6.857L9 5.143h3.455c1.731 0 2.884 1.568 3.021 3.017.107 1.157-.45 2.773-.741 3.411H18l-8.37 8.572z"/><defs><linearGradient id="DFYN__a" x1="16.767" x2="6.39" y1="8.25" y2="14.277" gradientUnits="userSpaceOnUse"><stop stopColor="#B8566F"/><stop offset="1" stopColor="#60B9E2"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconDfyn.displayName = 'Dfyn';
IconDfyn.variants = 'brandedmono';

export default IconDfyn;
