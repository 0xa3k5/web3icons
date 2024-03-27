
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconStpt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.572 5.143H12L6.43 12H12zm0 6.857H12l-5.57 6.857H12z"/>

        </>
      ) : (
        <>
          
    <path fill="#24AAE1" d="M17.572 5.143H12L6.43 12H12z"/>
    <path fill="#000" d="M17.572 12H12l-5.57 6.857H12z"/>

        </>
      )}
    </BaseIcon>
));

IconStpt.displayName = 'Stpt';

export default IconStpt;
