
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPlr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m16.714 7.714-2.571-2.57v8.57H7.286v2.572l2.571 2.571v-2.571h6.857zm-6-.857H7.286v3.429h3.428z"/>

        </>
      ) : (
        <>
          
    <path fill="#00FF24" d="m16.715 7.714-2.572-2.57v8.57H7.286v2.572l2.572 2.571v-2.571h6.857zm-6-.857H7.286v3.429h3.429z"/>

        </>
      )}
    </BaseIcon>
));

IconPlr.displayName = 'Plr';

export default IconPlr;
