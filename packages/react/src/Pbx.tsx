
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPbx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.079 15.013h-7.65V9.257c0-2.04 1.671-3.69 3.737-3.69h3.913c2.635.005 4.778 2.118 4.778 4.723s-2.143 4.723-4.778 4.723"/>
    <path fill="currentColor" d="M10.252 9.347C7.912 8.19 7.723 7.033 7.929 6.305a3.67 3.67 0 0 0-1.5 2.957v5.858h7.65c1.127 0 2.16-.497 2.97-1.135-.399-2.795-3.6-3.06-6.797-4.638"/>
    <path fill="currentColor" d="M6.429 10.552v6.175c0 1.578 1.607 2.606 2.974 1.907l.45-.23c2.229-1.158 1.997-4.522-.364-5.34-1.693-.575-3.06-.96-3.06-2.512m4.311-4.98c.557.613 1.74 1.388 4.294 1.885 1.293.253 2.523.757 3.622 1.483a4.78 4.78 0 0 0-4.577-3.368z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#PBX__a)" d="M14.079 15.013h-7.65V9.257c0-2.04 1.671-3.69 3.737-3.69h3.913c2.635.005 4.778 2.118 4.778 4.723s-2.143 4.723-4.778 4.723"/>
    <path fill="url(#PBX__b)" d="M10.252 9.347C7.912 8.19 7.723 7.033 7.929 6.305a3.67 3.67 0 0 0-1.5 2.957v5.858h7.65c1.127 0 2.16-.497 2.97-1.135-.399-2.795-3.6-3.06-6.797-4.638"/>
    <path fill="url(#PBX__c)" d="M6.429 10.552v6.175c0 1.578 1.607 2.606 2.974 1.907l.45-.23c2.229-1.158 1.997-4.522-.364-5.34-1.693-.575-3.06-.96-3.06-2.512"/>
    <path fill="url(#PBX__d)" d="M10.74 5.572c.557.613 1.74 1.388 4.294 1.885 1.293.253 2.523.757 3.622 1.483a4.78 4.78 0 0 0-4.577-3.368z"/>
    <defs>
        <linearGradient id="PBX__a" x1="12.082" x2="16.049" y1="12.713" y2="9.397" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0080EE"/>
            <stop offset="1" stopColor="#01C5F6"/>
        </linearGradient>
        <linearGradient id="PBX__b" x1="10.752" x2="14.177" y1="16.163" y2="12.437" gradientUnits="userSpaceOnUse">
            <stop stopColor="#725BFF"/>
            <stop offset="1" stopColor="#9665FB"/>
        </linearGradient>
        <linearGradient id="PBX__c" x1="9.536" x2="11.969" y1="18.851" y2="9.483" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3C31D6"/>
            <stop offset=".98" stopColor="#2880FA"/>
        </linearGradient>
        <linearGradient id="PBX__d" x1="16.239" x2="15.219" y1="6.356" y2="7.757" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E5CC"/>
            <stop offset=".94" stopColor="#10DCC6"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconPbx.displayName = 'Pbx';

export default IconPbx;
