
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPart = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.577 6.874A1.714 1.714 0 0 0 6.863 8.59v7.86c0 .727.205 1.44.592 2.055l.223.353a2.53 2.53 0 0 1-2.53-2.53V8.59A3.43 3.43 0 0 1 8.577 5.16h6.857a3.43 3.43 0 0 1 3.429 3.429v6.84a3.43 3.43 0 0 1-3.429 3.428h-5.148a1.714 1.714 0 0 1-1.715-1.714V9.857a1.286 1.286 0 0 1 1.286-1.285h4.286a1.286 1.286 0 0 1 1.286 1.285v4.286a1.286 1.286 0 0 1-1.286 1.286h-3.857v1.714h5.148a1.714 1.714 0 0 0 1.714-1.714v-6.84a1.714 1.714 0 0 0-1.714-1.715zm1.709 6.84h3.428v-3.428h-3.428z"/>
        </>
      ) : (
        <>
          <path fill="url(#PART__a)" d="M8.577 6.874A1.714 1.714 0 0 0 6.863 8.59v7.86c0 .727.205 1.44.592 2.055l.223.353a2.53 2.53 0 0 1-2.53-2.53V8.59A3.43 3.43 0 0 1 8.577 5.16h6.857a3.43 3.43 0 0 1 3.429 3.429v6.84a3.43 3.43 0 0 1-3.429 3.428h-5.148a1.714 1.714 0 0 1-1.715-1.714V9.857a1.286 1.286 0 0 1 1.286-1.285h4.286a1.286 1.286 0 0 1 1.286 1.285v4.286a1.286 1.286 0 0 1-1.286 1.286h-3.857v1.714h5.148a1.714 1.714 0 0 0 1.714-1.714v-6.84a1.714 1.714 0 0 0-1.714-1.715zm1.709 6.84h3.428v-3.428h-3.428z"/><defs><linearGradient id="PART__a" x1="12.006" x2="12.006" y1="5.16" y2="18.857" gradientUnits="userSpaceOnUse"><stop stopColor="#26F294"/><stop offset="1" stopColor="#45D693"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconPart.displayName = 'Part';
IconPart.variants = 'brandedmono';

export default IconPart;
