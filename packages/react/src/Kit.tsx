
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKit = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.857 6.682v10.547l3.514 2.057L18 15.6V8.34l-7.273-3.626zm.133.05 3.296 2.285v10.115l.685-3.545 3.6-1.607v-3.943L6.99 6.73z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#6025E1" d="M6.857 6.682v10.547l3.515 2.057L18 15.6V8.34l-7.273-3.626zm.133.05 3.296 2.285v10.115l.686-3.545 3.6-1.607v-3.943L6.99 6.73z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconKit.displayName = 'Kit';

export default IconKit;
