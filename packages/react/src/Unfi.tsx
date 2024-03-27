
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconUnfi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.092 8.143h4.817l2.948 2.949v4.817l-2.948 2.948H8.092L5.143 15.91v-4.817zm.531 1.286L6.43 11.623v3.754l2.194 2.195h3.754l2.195-2.195v-3.754L12.377 9.43z"/>
    <path fill="currentColor" d="M11.52 4.714h4.817l2.949 2.949v4.817l-2.949 2.949H11.52L8.57 12.48V7.663zM12.05 6 9.857 8.194v3.755l2.194 2.194h3.755L18 11.949V8.194L15.806 6z"/>

        </>
      ) : (
        <>
          
    <path fill="#000" d="M8.091 8.143h4.817l2.949 2.949v4.817l-2.949 2.948H8.091L5.143 15.91v-4.817zm.532 1.286-2.195 2.194v3.754l2.195 2.195h3.754l2.194-2.195v-3.754L12.377 9.43z"/>
    <path fill="#38F997" d="M11.52 4.714h4.817l2.949 2.949v4.817l-2.949 2.949H11.52L8.57 12.48V7.663zM12.05 6 9.857 8.194v3.755l2.194 2.194h3.755L18 11.949V8.194L15.806 6z"/>

        </>
      )}
    </BaseIcon>
));

IconUnfi.displayName = 'Unfi';

export default IconUnfi;
