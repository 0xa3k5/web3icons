
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHunt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.143 5.143a.857.857 0 1 1 1.714 0v3.651a3.857 3.857 0 0 1 6 3.206v3.857a.858.858 0 0 1-1.714 0V12a2.143 2.143 0 0 0-4.286 0v3.857a.857.857 0 0 1-1.714 0zm1.714 13.285a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0m5.143.858a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>

        </>
      ) : (
        <>
          
    <path fill="#FB6F6E" d="M8.143 5.143a.857.857 0 1 1 1.714 0v3.651a3.857 3.857 0 0 1 6 3.206v3.857a.857.857 0 0 1-1.714 0V12a2.143 2.143 0 0 0-4.286 0v3.857a.857.857 0 0 1-1.714 0zm1.714 13.285a.857.857 0 1 1-1.715 0 .857.857 0 0 1 1.715 0m5.143.858a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>

        </>
      )}
    </BaseIcon>
));

IconHunt.displayName = 'Hunt';

export default IconHunt;
