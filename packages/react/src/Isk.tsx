
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIsk = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.906 3.857 6.051 5.931a2.987 2.987 0 0 1 0 4.286L16.093 15.9l-4.183-4.102a5.54 5.54 0 0 1 0-7.941zm.188 16.286L6.043 14.21a2.987 2.987 0 0 1 0-4.285L7.907 8.1 12.09 12.2a5.543 5.543 0 0 1 0 7.942z"/>
        </>
      ) : (
        <>
          <path fill="url(#ISK__a)" d="m11.906 3.857 6.051 5.931a2.987 2.987 0 0 1 0 4.286L16.093 15.9l-4.183-4.102a5.54 5.54 0 0 1 0-7.941zm.188 16.286L6.043 14.21a2.987 2.987 0 0 1 0-4.285L7.907 8.1 12.09 12.2a5.543 5.543 0 0 1 0 7.942z"/><defs><linearGradient id="ISK__a" x1="15.885" x2="7.198" y1="4.756" y2="18.925" gradientUnits="userSpaceOnUse"><stop stopColor="#FA2A9B"/><stop offset=".39" stopColor="#6691DA"/><stop offset=".57" stopColor="#2BAAEA"/><stop offset="1" stopColor="#003A9F"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconIsk.displayName = 'Isk';

export default IconIsk;
