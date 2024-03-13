
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMeed = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9 16.286H6.43V5.57h3l2.357 6.857 2.786-6.857h3v14.143H15v-9.428l-2.357 6h-1.714l-1.929-6z"/>
        </>
      ) : (
        <>
          <path fill="#E45C5C" d="M9 16.286H6.43V5.57h3l2.357 6.857 2.786-6.857h3v14.143H15v-9.428l-2.357 6h-1.714l-1.929-6z"/>
        </>
      )}
    </BaseIcon>
));

IconMeed.displayName = 'Meed';

export default IconMeed;
