
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLtc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m8.251 13.979-1.072.42.517-2.078 1.08-.435 1.56-6.315h3.848l-1.14 4.65 1.057-.427-.51 2.055-1.065.435L11.889 15h5.79l-.653 2.571h-9.66z"/>

        </>
      ) : (
        <>
          
    <path fill="#345D9D" d="m8.251 13.979-1.072.42.517-2.078 1.08-.435 1.56-6.315h3.848l-1.14 4.65 1.057-.427-.51 2.055-1.065.435L11.889 15h5.79l-.653 2.571h-9.66z"/>

        </>
      )}
    </BaseIcon>
));

IconLtc.displayName = 'Ltc';

export default IconLtc;
