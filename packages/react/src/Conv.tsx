
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconConv = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.609 8.023 14.593 12l4.011 3.986A7.67 7.67 0 0 0 19.714 12a7.65 7.65 0 0 0-1.105-3.977"/>
    <path fill="currentColor" d="M17.494 6.587 15.67 8.396a5.143 5.143 0 1 0 0 7.213l1.821 1.812a7.714 7.714 0 1 1 .004-10.834"/>

        </>
      ) : (
        <>
          
    <path fill="#342989" d="M18.608 8.023 14.592 12l4.012 3.986A7.67 7.67 0 0 0 19.714 12a7.65 7.65 0 0 0-1.106-3.977"/>
    <path fill="#E31C38" d="m17.494 6.587-1.826 1.809a5.143 5.143 0 1 0 0 7.213l1.822 1.812a7.714 7.714 0 1 1 .004-10.834"/>

        </>
      )}
    </BaseIcon>
));

IconConv.displayName = 'Conv';

export default IconConv;
