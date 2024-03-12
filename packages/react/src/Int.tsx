
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconInt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 5.143 8.143 7.05 12 9l3.857-1.95zM9.857 8.422v4.122l-1.286 1.23 1.286 1.213v3.87h4.286v-3.87l1.285-1.213-1.285-1.04V8.421L12 10.522zm3.857 6.938v3.103h-3.428zm0-5.88-4.457 4.264h-.004l.407.459v-.309l.626-.535v4.513l4.478-4.128-.454-.45v.339l-.596.514zm-3.428.03v2.679l1.29-1.256zM12 5.563 8.99 7.046 12 8.563l3.013-1.517z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#DA1B28" d="M12 5.143 8.143 7.05 12 9l3.857-1.95zM9.857 8.422v4.122l-1.286 1.23 1.286 1.213v3.87h4.286v-3.87l1.285-1.213-1.285-1.04V8.421L12 10.522zm3.857 6.938v3.103h-3.428zm0-5.88-4.457 4.264h-.004l.407.459v-.309l.626-.535v4.513l4.478-4.128-.454-.45v.339l-.596.514zm-3.428.03v2.679l1.29-1.256zM12 5.563 8.99 7.046 12 8.563l3.013-1.517z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconInt.displayName = 'Int';
IconInt.variants = 'brandedmono';

export default IconInt;
