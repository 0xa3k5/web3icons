
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOxen = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 12 5.57 6.43h12.857zm0 0L5.57 17.572h12.857z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#12C6BA" d="M12 12 5.57 6.43h12.857zm0 0L5.57 17.572h12.857z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconOxen.displayName = 'Oxen';
IconOxen.variants = 'brandedmono';

export default IconOxen;
