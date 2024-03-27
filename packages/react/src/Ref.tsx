
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRef = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.967 5.143H8.002L3.857 12l4.145 6.857h7.965L20.143 12zm-1.918 2.572H8.57v2.142h4.286L8.57 13.273v3.011l7.072-5.689zm-2.412 6.707 1.754-1.434 2.895 3.296H13.19z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#F38F31" d="M15.967 5.143H8.002L3.857 12l4.145 6.857h7.965L20.143 12zm-1.918 2.572H8.57v2.142h4.286L8.57 13.273v3.011l7.072-5.689zm-2.412 6.707 1.754-1.434 2.895 3.296H13.19z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconRef.displayName = 'Ref';

export default IconRef;
