
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPlr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m16.714 7.715-2.571-2.572v8.572H7.286v2.57l2.571 2.572v-2.571h6.857zm-6-.858H7.286v3.429h3.428z"/>
        </>
      ) : (
        <>
          <path fill="#00FF24" d="m16.715 7.715-2.572-2.572v8.572H7.286v2.57l2.572 2.572v-2.571h6.857zm-6-.858H7.286v3.429h3.429z"/>
        </>
      )}
    </BaseIcon>
));

IconPlr.displayName = 'Plr';
IconPlr.variants = 'brandedmono';

export default IconPlr;
