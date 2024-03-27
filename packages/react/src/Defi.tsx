
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDefi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.714 9.429V6h12v3.429zm0 5.142v-3.428h8.572v3.428zm-4.285 0v-3.428h3.428v3.428zm4.285 5.572v-3.429h3.858v3.429z"/>

        </>
      ) : (
        <>
          
    <path fill="#02A5C2" d="M7.714 9.429V6h12v3.429z"/>
    <path fill="#5FCADE" d="M7.714 14.571v-3.428h8.572v3.428zm-4.285 0v-3.428h3.428v3.428z"/>
    <path fill="#ABEBF4" d="M7.714 20.143v-3.429h3.858v3.429z"/>

        </>
      )}
    </BaseIcon>
));

IconDefi.displayName = 'Defi';

export default IconDefi;
