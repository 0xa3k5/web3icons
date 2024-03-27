
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRamp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.143 13.532 12 14.844l-2.143-1.312v-2.63L12 9.584l2.143 1.318z"/>
    <path fill="currentColor" d="M12 4.071 5.143 8.145v8.138L12 20.357l6.857-4.074V8.145zM8.572 14.187V10.22L12 8.27l3.429 1.951v3.966l-3.454 1.978zm0 2.286v-1.377l4.573 2.682L12 18.46zm8.571-1.135-3.234 1.988-1.185-.71 3.562-1.987v-4.85L12 7.393 7.714 9.78v6.126l-.857-.623V9.146L12 6.078l5.143 3.012z"/>

        </>
      ) : (
        <>
          
    <path fill="#00B5D1" d="M14.143 13.532 12 14.844l-2.143-1.312v-2.63L12 9.584l2.143 1.318z"/>
    <path fill="#0D285A" d="M12 4.071 5.143 8.145v8.138L12 20.357l6.857-4.074V8.145zM8.57 14.187V10.22L12 8.27l3.428 1.951v3.966l-3.454 1.978zm0 2.286v-1.377l4.574 2.682L12 18.46zm8.572-1.135-3.234 1.988-1.186-.71 3.562-1.987v-4.85L12 7.393 7.714 9.78v6.126l-.857-.623V9.146L12 6.078l5.143 3.012z"/>

        </>
      )}
    </BaseIcon>
));

IconRamp.displayName = 'Ramp';

export default IconRamp;
