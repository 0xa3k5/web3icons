
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFloor = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.714 11.143h14.572v1.714H4.714z"/>
        </>
      ) : (
        <>
          <path fill="#00F3D5" d="M4.714 11.143h14.571v1.714H4.714z"/>
        </>
      )}
    </BaseIcon>
));

IconFloor.displayName = 'Floor';
IconFloor.variants = 'brandedmono';

export default IconFloor;
