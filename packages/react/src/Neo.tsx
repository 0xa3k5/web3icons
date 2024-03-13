
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNeo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.571 19.286 6 16.97V7.33l7.427-2.615 4.92 2.289-6.776 2.426z"/><path fill="currentColor" d="M18.429 16.714 12 14.074V9.79l6.429-2.392z"/>
        </>
      ) : (
        <>
          <path fill="#00E599" d="M11.571 19.286 6 16.97V7.33l7.427-2.615 4.92 2.289-6.776 2.426z"/><path fill="#00AF92" d="M18.429 16.714 12 14.074V9.79l6.429-2.392z"/>
        </>
      )}
    </BaseIcon>
));

IconNeo.displayName = 'Neo';

export default IconNeo;
