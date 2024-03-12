
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.714 12a4.714 4.714 0 0 1-6.664 4.294.83.83 0 0 0-.403-.085c-.973.064-1.843.463-2.353.78a6.857 6.857 0 1 0-.428-.442 2.61 2.61 0 0 0 .921-2.305.8.8 0 0 0-.077-.283A4.715 4.715 0 1 1 16.714 12"/>
        </>
      ) : (
        <>
          <path fill="#0057FF" d="M16.714 12a4.714 4.714 0 0 1-6.664 4.294.83.83 0 0 0-.403-.085c-.973.064-1.843.463-2.353.78a6.857 6.857 0 1 0-.428-.442 2.61 2.61 0 0 0 .921-2.305.8.8 0 0 0-.077-.283A4.715 4.715 0 1 1 16.714 12"/>
        </>
      )}
    </BaseIcon>
));

IconOx.displayName = 'Ox';
IconOx.variants = 'brandedmono';

export default IconOx;
