
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNym = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M19.286 12a7.286 7.286 0 1 0-14.571 0 7.286 7.286 0 0 0 14.57 0m-.857 0A6.429 6.429 0 1 0 5.57 12a6.429 6.429 0 0 0 12.858 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M8.143 16.282V7.727a5.8 5.8 0 0 1 1.286-.87l5.143 8.014V6.858c.45.236.92.557 1.285.904v8.525a6 6 0 0 1-1.285.857l-5.143-8.04v8.04a6.8 6.8 0 0 1-1.286-.861"/>

        </>
      ) : (
        <>
          
    <path fill="#181B1E" d="M19.285 12a7.286 7.286 0 1 0-14.571 0 7.286 7.286 0 0 0 14.571 0m-.857 0a6.429 6.429 0 1 0-12.857 0 6.429 6.429 0 0 0 12.857 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#181B1E" d="M8.142 16.282V7.727a5.8 5.8 0 0 1 1.286-.87l5.143 8.014V6.858c.45.236.921.557 1.286.904v8.525a6 6 0 0 1-1.286.857l-5.143-8.04v8.04a6.8 6.8 0 0 1-1.286-.861"/>

        </>
      )}
    </BaseIcon>
));

IconNym.displayName = 'Nym';

export default IconNym;
