
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPyth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.714 11.143c0 .827-.711 1.286-1.285 1.286v1.714a3 3 0 1 0-3-3v7.372l1.714 1.628v-9c0-.557.459-1.286 1.286-1.286a1.286 1.286 0 0 1 1.285 1.286"/>
    <path fill="currentColor" d="M12.429 5.143a5.97 5.97 0 0 0-4.5 2.032 5.98 5.98 0 0 0-1.5 3.968v4.5l1.714 1.65v-6.15c0-2.237 1.8-4.286 4.286-4.286s4.285 2.07 4.285 4.286c0 2.486-2.048 4.286-4.285 4.286v1.714a6 6 0 0 0 0-12"/>

        </>
      ) : (
        <>
          
    <path fill="#110F24" d="M13.714 11.143c0 .827-.711 1.286-1.285 1.286v1.714a3 3 0 1 0-3-3v7.372l1.714 1.628v-9c0-.557.459-1.286 1.286-1.286a1.286 1.286 0 0 1 1.285 1.286"/>
    <path fill="#110F24" d="M12.429 5.143a5.97 5.97 0 0 0-4.5 2.032 5.98 5.98 0 0 0-1.5 3.968v4.5l1.714 1.65v-6.15c0-2.237 1.8-4.286 4.286-4.286s4.285 2.07 4.285 4.286c0 2.486-2.048 4.286-4.285 4.286v1.714a6 6 0 0 0 0-12"/>

        </>
      )}
    </BaseIcon>
));

IconPyth.displayName = 'Pyth';

export default IconPyth;
