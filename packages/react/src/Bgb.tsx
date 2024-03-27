
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBgb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M4.972 9.304a.916.916 0 0 0 0 1.273l3.882 3.994h2.55L7.66 10.714H12L10.286 9H7.822l3.745-3.857h-2.55zm11 5.267L12 18.857h2.554l4.046-4.363a.99.99 0 0 0 0-1.333L14.743 9h-2.554l3.578 3.857h-4.195l1.714 1.714z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BGB__a)" d="M4.971 9.304a.916.916 0 0 0 0 1.273l3.883 3.994h2.55l-3.746-3.857H12L10.285 9H7.821l3.746-3.857h-2.55zm11.001 5.267L12 18.857h2.554l4.046-4.363a.99.99 0 0 0 0-1.333L14.742 9h-2.554l3.579 3.857H11.57l1.714 1.714z"/>
    <defs>
        <linearGradient id="BGB__a" x1="18.857" x2="4.714" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#008BCE"/>
            <stop offset="1" stopColor="#1BA2B6"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBgb.displayName = 'Bgb';

export default IconBgb;
