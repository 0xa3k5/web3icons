
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCanto = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.143 6h9.428v12H8.143v-2.143H6V8.143h2.143zm7.286 2.143h-5.143v2.143H8.143v3.428h2.143v2.143h5.143v-2.143h-5.143v-3.428h5.143z"/>

        </>
      ) : (
        <>
          
    <path fill="#74F8A2" d="M8.143 6h9.428v12H8.143v-2.143H6V8.143h2.143zm7.286 2.143h-5.143v2.143H8.143v3.428h2.143v2.143h5.143v-2.143h-5.143v-3.428h5.143z"/>

        </>
      )}
    </BaseIcon>
));

IconCanto.displayName = 'Canto';

export default IconCanto;
