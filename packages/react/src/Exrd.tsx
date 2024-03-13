
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconExrd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.714 13.714V12H6.96a.63.63 0 0 1 .519.257l2.567 3.635 3.926-8.658a.64.64 0 0 1 .582-.377h4.732v1.714h-4.05L10.749 18.6a.43.43 0 0 1-.738.077l-3.42-4.963z"/>
        </>
      ) : (
        <>
          <path fill="#3CCF8D" d="M4.714 13.714V12H6.96a.63.63 0 0 1 .518.257l2.567 3.635 3.926-8.658a.64.64 0 0 1 .583-.377h4.731v1.714h-4.05L10.748 18.6a.43.43 0 0 1-.737.077l-3.42-4.963z"/>
        </>
      )}
    </BaseIcon>
));

IconExrd.displayName = 'Exrd';

export default IconExrd;
