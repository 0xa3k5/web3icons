
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKasta = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.286 6.857H6v5.1l2.323-2.529h1.963l-2.752 3 2.752 3H8.323L6 12.895v2.533H4.286zM19.286 15.857a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/><path fill="currentColor" d="M17.143 15.857v-3.214c0-1.072-.617-3.215-3.086-3.215-2.756 0-3.343 2.439-3.343 3.215 0 .925.515 3.214 2.902 3.214 1.397 0 1.774-1.033 1.813-1.183v1.183zm-3.215-1.714a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#621EFD" d="M4.286 6.857H6v5.1l2.323-2.529h1.963l-2.751 3 2.751 3H8.323L6 12.895v2.533H4.286zM19.286 15.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.57"/><path fill="#621EFD" d="M17.143 15.857v-3.214c0-1.072-.617-3.215-3.085-3.215-2.756 0-3.343 2.439-3.343 3.215 0 .925.514 3.214 2.901 3.214 1.397 0 1.774-1.033 1.813-1.183v1.183zm-3.214-1.714a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconKasta.displayName = 'Kasta';

export default IconKasta;
