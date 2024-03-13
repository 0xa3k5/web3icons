
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLif3 = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.783 5.542A1.3 1.3 0 0 1 12 4.714a1.3 1.3 0 0 1 1.217.828l4.097 10.315h1.543v1.715h-3L12 7.286 8.143 17.572h-3v-1.715h1.543z"/>
        </>
      ) : (
        <>
          <path fill="url(#LIF3__a)" d="M10.783 5.542A1.3 1.3 0 0 1 12 4.714a1.3 1.3 0 0 1 1.217.828l4.097 10.315h1.543v1.715h-3L12 7.286 8.143 17.572h-3v-1.715h1.542z"/><defs><linearGradient id="LIF3__a" x1="7.714" x2="15.722" y1="5.862" y2="16.81" gradientUnits="userSpaceOnUse"><stop stopColor="#749FC1"/><stop offset=".49" stopColor="#294874"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLif3.displayName = 'Lif3';

export default IconLif3;
