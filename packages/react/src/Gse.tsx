
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGse = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.286 12A4.286 4.286 0 1 1 12 7.714v-2.57A6.857 6.857 0 1 0 18.857 12zm0-3v3h-3V9zm0 0V7.286H18V9z"/>
        </>
      ) : (
        <>
          <path fill="#24ABCD" d="M16.285 12A4.286 4.286 0 1 1 12 7.714v-2.57A6.857 6.857 0 1 0 18.857 12zm0-3v3h-3V9zm0 0V7.286H18V9z"/>
        </>
      )}
    </BaseIcon>
));

IconGse.displayName = 'Gse';

export default IconGse;
