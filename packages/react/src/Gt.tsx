
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M19.715 8.571 15 11.143v2.571l1.286-.771v1.778L12 17.143l-3.394-2.195a1.74 1.74 0 0 1-.892-1.534V9.231l3.55-2.16c.235-.132.462-.214.736-.214s.583.082.823.214l3.793 2.16 2.323-1.32-5.914-3.364A2.1 2.1 0 0 0 12 4.286a1.83 1.83 0 0 0-.943.257L5.143 7.916v6.823c0 .638.343 1.22.9 1.542L12 19.714l5.949-3.437a1.81 1.81 0 0 0 .908-1.556v-3.15l.858-.428z"/>

        </>
      ) : (
        <>
          
    <path fill="#D35756" d="M19.714 8.571 15 11.143v2.571l1.285-.771v1.778L12 17.143l-3.395-2.195a1.74 1.74 0 0 1-.891-1.534V9.231l3.549-2.16c.235-.132.462-.214.737-.214s.583.082.823.214l3.792 2.16 2.323-1.32-5.914-3.364A2.1 2.1 0 0 0 12 4.286a1.83 1.83 0 0 0-.943.257L5.143 7.916v6.823c0 .638.342 1.22.9 1.542L12 19.714l5.948-3.437a1.81 1.81 0 0 0 .909-1.556v-3.15l.857-.428z"/>

        </>
      )}
    </BaseIcon>
));

IconGt.displayName = 'Gt';

export default IconGt;
