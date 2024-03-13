
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGfal = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.571 15.643V8.357L12 4.714l3.27 1.822-6.699 3.87v3.87L12 15.857l3.428-1.714v-3.874l3-1.912v7.286L12 19.286z"/>
        </>
      ) : (
        <>
          <path fill="#F113A3" d="M5.571 15.643V8.357L12 4.714l3.27 1.822-6.699 3.87v3.87L12 15.857l3.428-1.714v-3.874l3-1.912v7.286L12 19.286z"/>
        </>
      )}
    </BaseIcon>
));

IconGfal.displayName = 'Gfal';

export default IconGfal;
