
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSclp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m14.975 5.584-3.472 3.57a.2.2 0 0 0-.034.03l-2.52 2.52a.623.623 0 0 0 0 .883l2.387 2.387-2.94 3.086a9 9 0 0 1-1.32-1.11c-3.082-3.073-3.189-6.878-.086-9.986 2.46-2.46 5.362-2.875 7.985-1.38"/>
    <path fill="currentColor" d="M17.04 17.01c-2.45 2.447-5.335 2.89-7.94 1.48l1.037-1.08 2.374-2.456 2.362-2.361a.63.63 0 0 0 0-.883l-2.37-2.37 2.91-3.043.257-.266c.428.3.857.664 1.264 1.072 3.056 3.047 3.184 6.827.107 9.908"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SCLP__a)" d="m14.974 5.584-3.471 3.57a.2.2 0 0 0-.035.03l-2.52 2.52a.623.623 0 0 0 0 .883l2.387 2.387-2.94 3.086a9 9 0 0 1-1.32-1.11c-3.081-3.073-3.188-6.878-.085-9.986 2.46-2.46 5.361-2.875 7.984-1.38"/>
    <path fill="url(#SCLP__b)" d="M17.04 17.01c-2.452 2.447-5.336 2.889-7.942 1.479l1.037-1.08 2.375-2.456 2.361-2.361a.63.63 0 0 0 0-.883l-2.37-2.37 2.91-3.043.257-.266c.429.3.857.664 1.265 1.072 3.055 3.047 3.184 6.827.107 9.908"/>
    <defs>
        <linearGradient id="SCLP__a" x1="16.669" x2="-1.034" y1="-.634" y2="49.686" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00DECA"/>
            <stop offset=".38" stopColor="#3A8AFA"/>
            <stop offset="1" stopColor="#1A6AF4"/>
        </linearGradient>
        <linearGradient id="SCLP__b" x1="17.46" x2="-2.019" y1="1.165" y2="43.697" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00DECA"/>
            <stop offset=".38" stopColor="#3A8AFA"/>
            <stop offset="1" stopColor="#1A6AF4"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSclp.displayName = 'Sclp';

export default IconSclp;
