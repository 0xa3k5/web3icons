
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBsv = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9 5.143v1.714H7.286v1.714h.857A.43.43 0 0 1 8.57 9v6a.43.43 0 0 1-.428.428h-.429l-.428 1.715H9v1.714h1.714v-1.714H12v1.714h1.714v-1.714h.857v-.007c1.676-.102 3-1.404 3-2.993 0-1.21-.768-2.254-1.874-2.728.621-.471 1.017-1.186 1.017-1.986 0-1.576-1.714-2.572-3-2.572V5.143H12v1.714h-1.286V5.143zm1.714 10.285v-3H13.5a1.5 1.5 0 0 1 0 3zm0-6.857h2.143a1.286 1.286 0 1 1 0 2.572h-2.143z"/>
        </>
      ) : (
        <>
          <path fill="#EAB300" d="M9 5.143v1.714H7.286v1.714h.857A.43.43 0 0 1 8.572 9v6a.43.43 0 0 1-.429.428h-.428l-.429 1.715H9v1.714h1.715v-1.714H12v1.714h1.715v-1.714h.857v-.007c1.675-.102 3-1.404 3-2.993 0-1.21-.768-2.254-1.874-2.728.62-.471 1.017-1.186 1.017-1.986 0-1.576-1.715-2.572-3-2.572V5.143H12v1.714h-1.285V5.143zm1.715 10.285v-3H13.5a1.5 1.5 0 0 1 0 3zm0-6.857h2.143a1.286 1.286 0 1 1 0 2.572h-2.143z"/>
        </>
      )}
    </BaseIcon>
));

IconBsv.displayName = 'Bsv';
IconBsv.variants = 'brandedmono';

export default IconBsv;
