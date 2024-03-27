
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRgt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 16.286a4.286 4.286 0 1 0 0-8.571 4.286 4.286 0 0 0 0 8.57m0-.429a3.857 3.857 0 1 0 0-7.715 3.857 3.857 0 0 0 0 7.715" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M9.215 16.826a5.572 5.572 0 1 0 5.572-9.65 5.572 5.572 0 0 0-5.572 9.65m2.785.317a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 1 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#RGT__a)" d="M12 16.286a4.286 4.286 0 1 0 0-8.571 4.286 4.286 0 0 0 0 8.57m0-.429a3.857 3.857 0 1 0 0-7.715 3.857 3.857 0 0 0 0 7.715" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#RGT__b)" d="M9.215 16.826a5.571 5.571 0 1 0 5.572-9.65 5.571 5.571 0 0 0-5.572 9.65m2.785.317a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#RGT__c)" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 1 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="RGT__a" x1="4.641" x2="19.358" y1="12.19" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9F9F9"/>
            <stop offset="1" stopColor="#F9F9F9" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="RGT__b" x1="19.488" x2="4.509" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0F0F0"/>
            <stop offset="1" stopColor="#F0F0F0" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="RGT__c" x1="4.714" x2="19.285" y1="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0F0F0"/>
            <stop offset="1" stopColor="#F0F0F0" stopOpacity="0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconRgt.displayName = 'Rgt';

export default IconRgt;
