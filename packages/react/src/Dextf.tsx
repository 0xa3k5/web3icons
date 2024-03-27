
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDextf = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.429 16.912V7.089c0-.84.685-1.517 1.543-1.517h4.787c3.6 0 6.527 2.88 6.527 6.428s-2.923 6.429-6.527 6.429H7.967a1.527 1.527 0 0 1-1.538-1.517m1.088-3.973 2.092.454 4.534-3.716v5.85l1.714 1.466V7.972l-1.153-.63-7.187 5.592z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#DEXTF__a)" d="M6.429 16.912V7.089c0-.84.685-1.517 1.543-1.517h4.787c3.6 0 6.527 2.88 6.527 6.428s-2.923 6.429-6.527 6.429H7.967a1.527 1.527 0 0 1-1.538-1.517m1.088-3.973 2.092.454 4.534-3.716v5.85l1.714 1.466V7.972l-1.153-.63-7.187 5.592z"/>
    <defs>
        <linearGradient id="DEXTF__a" x1="12.857" x2="12.857" y1="5.572" y2="18.429" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72F64B"/>
            <stop offset=".83" stopColor="#2D6A1C"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconDextf.displayName = 'Dextf';

export default IconDextf;
