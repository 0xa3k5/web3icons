
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHifi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.199 12.24a1.654 1.654 0 0 1 0-2.34L9.9 5.199a1.655 1.655 0 0 1 2.34 2.34l-4.697 4.7a1.655 1.655 0 0 1-2.34 0zm4.984 1.577a1.656 1.656 0 0 1 0-2.34l1.294-1.294a1.655 1.655 0 0 1 2.34 2.34l-1.294 1.294a1.653 1.653 0 0 1-2.34 0m1.577 4.984a1.656 1.656 0 0 1 0-2.34l4.697-4.701a1.657 1.657 0 0 1 2.34 0 1.656 1.656 0 0 1 0 2.34L14.1 18.8a1.656 1.656 0 0 1-2.34 0"/>
        </>
      ) : (
        <>
          <path fill="#6E2EF4" d="M5.199 12.24a1.654 1.654 0 0 1 0-2.34L9.9 5.199a1.655 1.655 0 0 1 2.34 2.34l-4.697 4.7a1.655 1.655 0 0 1-2.34 0zm4.984 1.577a1.656 1.656 0 0 1 0-2.34l1.294-1.294a1.655 1.655 0 0 1 2.34 2.34l-1.294 1.294a1.653 1.653 0 0 1-2.34 0m1.577 4.984a1.656 1.656 0 0 1 0-2.34l4.697-4.701a1.657 1.657 0 0 1 2.34 0 1.656 1.656 0 0 1 0 2.34L14.1 18.8a1.656 1.656 0 0 1-2.34 0"/>
        </>
      )}
    </BaseIcon>
));

IconHifi.displayName = 'Hifi';
IconHifi.variants = 'brandedmono';

export default IconHifi;
