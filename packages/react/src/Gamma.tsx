
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGamma = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m12.429 10.89 5.76-5.747.6.6-5.773 5.842 5.841-.013v.857h-5.841l4.127 4.101-.6.6-4.11-4.2v5.503h-.857v-5.498l-5.837 5.922-.596-.6 5.842-5.828H5.143v-.857l5.842.013-3.913-3.978.6-.6 3.9 3.883V5.143h.857z"/>

        </>
      ) : (
        <>
          
    <path fill="#FE0024" d="m12.428 10.89 5.76-5.747.6.6-5.773 5.842 5.842-.013v.857h-5.842l4.128 4.101-.6.6-4.11-4.2v5.503h-.858v-5.498l-5.837 5.922-.595-.6 5.841-5.828H5.143v-.857l5.841.013-3.913-3.978.6-.6 3.9 3.883V5.143h.857z"/>

        </>
      )}
    </BaseIcon>
));

IconGamma.displayName = 'Gamma';

export default IconGamma;
