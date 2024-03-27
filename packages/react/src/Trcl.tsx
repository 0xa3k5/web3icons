
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTrcl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m5.357 11.357-1.071.857c0-3 2.117-7.07 6.831-7.07 2.447 0 4.234.938 5.572 2.228l.407-.082-.223.27a7.24 7.24 0 0 1 1.984 5.087c0 3.258-.998 5.495-1.5 6.21C15 18 14.571 15.857 14.571 15c0-.488.133-.844.283-1.23.172-.454.347-.913.347-1.77 0-.428-.094-1.5-.741-2.601l-4.174 3.184v.064a1.929 1.929 0 1 1-1.132-1.757l4.77-2.228c-.703-.772-1.808-1.376-3.45-1.376-3.428 0-4.83 2.717-5.117 4.071"/>

        </>
      ) : (
        <>
          
    <path fill="url(#TRCL__a)" d="m5.358 11.357-1.072.857c0-3 2.117-7.07 6.832-7.07 2.447 0 4.234.938 5.571 2.228l.407-.082-.223.27a7.24 7.24 0 0 1 1.985 5.087c0 3.258-.999 5.495-1.5 6.21C15 18 14.572 15.857 14.572 15c0-.488.133-.844.283-1.23.171-.454.347-.913.347-1.77 0-.428-.094-1.5-.742-2.601l-4.174 3.184v.064a1.929 1.929 0 1 1-1.131-1.757l4.77-2.228c-.703-.772-1.809-1.376-3.45-1.376-3.429 0-4.83 2.717-5.117 4.071"/>
    <defs>
        <linearGradient id="TRCL__a" x1="4.882" x2="18.382" y1="9.429" y2="9.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#101BAB"/>
            <stop offset="1" stopColor="#111B38"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconTrcl.displayName = 'Trcl';

export default IconTrcl;
