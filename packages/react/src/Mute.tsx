
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMute = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.571 6.429h3.442l2.918 6.857h.137l2.915-6.857h3.445v7.714h-2.571v-3.416l-2.991 6.845h-1.732l-2.991-6.883v6.883H5.57z"/><path fill="currentColor" d="M17.143 17.572a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/>
        </>
      ) : (
        <>
          <path fill="#232843" d="M5.571 6.429h3.442l2.918 6.857h.137l2.915-6.857h3.445v7.714h-2.571v-3.416l-2.991 6.845h-1.732l-2.991-6.883v6.883H5.57z"/><path fill="#00BFFF" d="M17.143 17.572a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/>
        </>
      )}
    </BaseIcon>
));

IconMute.displayName = 'Mute';
IconMute.variants = 'brandedmono';

export default IconMute;
