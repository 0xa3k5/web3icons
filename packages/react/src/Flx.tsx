
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFlx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.857 3.857H14.21l-.767 3.746a4.6 4.6 0 0 0-1.033-.275l.446-2.185h-2.7L9.6 7.85a4.5 4.5 0 0 0-1.367 6.699l-.93 4.543a.87.87 0 0 0 .844 1.05h1.641l.823-4.012q.507.136 1.059.154l-.527 2.572h2.7l.724-3.531a4.49 4.49 0 0 0 1.166-5.7l.964-4.715a.87.87 0 0 0-.844-1.054zm-4.071 9.857a1.929 1.929 0 1 0 0-3.857 1.929 1.929 0 0 0 0 3.857" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#FLX__a)" d="M15.857 3.857h-1.645l-.768 3.746a4.6 4.6 0 0 0-1.032-.275l.445-2.185h-2.7L9.6 7.85a4.5 4.5 0 0 0-1.367 6.699l-.93 4.543a.87.87 0 0 0 .844 1.05H9.79l.823-4.012q.507.136 1.058.154l-.527 2.572h2.7l.724-3.531a4.49 4.49 0 0 0 1.166-5.7l.964-4.715a.87.87 0 0 0-.844-1.054zm-4.071 9.857a1.929 1.929 0 1 0 0-3.857 1.929 1.929 0 0 0 0 3.857" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="FLX__a" x1="15.033" x2="4.645" y1="5.893" y2="13.291" gradientUnits="userSpaceOnUse"><stop stopColor="#77D8FE"/><stop offset="1" stopColor="#4FDF9D"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconFlx.displayName = 'Flx';
IconFlx.variants = 'brandedmono';

export default IconFlx;
