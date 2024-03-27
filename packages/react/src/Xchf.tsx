
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconXchf = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m9.214 12.06-.426-.696L6.538 15h1.363l5.53-9 6.283 10.286h-7.919l-1.32-2.162.748-1.222L12.533 15h4.929L13.43 8.448l-4.79 7.838H4.286l4.502-7.367 1.174 1.918z"/>

        </>
      ) : (
        <>
          
    <path fill="#CE0E2D" d="m9.215 12.06-.426-.696L6.539 15H7.9l5.53-9 6.284 10.286h-7.92l-1.32-2.162.748-1.222L12.533 15h4.93L13.43 8.448l-4.792 7.838H4.286L8.79 8.919l1.173 1.918z"/>

        </>
      )}
    </BaseIcon>
));

IconXchf.displayName = 'Xchf';

export default IconXchf;
