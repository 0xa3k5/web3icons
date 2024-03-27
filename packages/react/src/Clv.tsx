
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconClv = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
    <path fill="currentColor" d="M12 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0m6-6a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
    <path fill="currentColor" d="M18 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>

        </>
      ) : (
        <>
          
    <path fill="#50C07C" d="M12 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
    <path fill="#50C07C" d="M12 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0m6-6a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>
    <path fill="#50C07C" d="M18 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>

        </>
      )}
    </BaseIcon>
));

IconClv.displayName = 'Clv';

export default IconClv;
