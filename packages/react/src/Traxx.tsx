
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTraxx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M3.429 7.714h8.143V9H3.429zm3.428 2.143h1.286V18H6.857zm5.572-2.143h8.143V9h-8.143zm3.428 2.143h1.286V18h-1.286z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M3.429 7.714h8.143V9H3.429zm3.428 2.143h1.286V18H6.857zm5.572-2.143h8.143V9h-8.143zm3.428 2.143h1.286V18h-1.286z"/>

        </>
      )}
    </BaseIcon>
));

IconTraxx.displayName = 'Traxx';

export default IconTraxx;
