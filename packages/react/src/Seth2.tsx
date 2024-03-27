
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSeth2 = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 12.857V4.286l-3.429 6.643zm0 0V4.286l3.429 6.643zm0 0L8.571 10.93 6 15.857zm0 0 3.429-1.928L18 15.857zm0 6v-6l-6 3z"/>
    <path fill="currentColor" d="M12 18.857v-6l6 3z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SETH2__a)" d="M12 12.857V4.286l-3.429 6.643z"/>
    <path fill="url(#SETH2__b)" d="M12 12.857V4.286l3.429 6.643z"/>
    <path fill="url(#SETH2__c)" d="M12 12.857 8.571 10.93 6 15.857z"/>
    <path fill="url(#SETH2__d)" d="m12 12.857 3.429-1.928L18 15.857z"/>
    <path fill="url(#SETH2__e)" d="M12 18.857v-6l-6 3z"/>
    <path fill="url(#SETH2__f)" d="M12 18.857v-6l6 3z"/>
    <defs>
        <linearGradient id="SETH2__a" x1="18" x2="13.88" y1="7.928" y2="19.405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DC371"/>
            <stop offset="1" stopColor="#6FB063"/>
        </linearGradient>
        <linearGradient id="SETH2__b" x1="6" x2="10.12" y1="7.928" y2="19.405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8DD981"/>
            <stop offset="1" stopColor="#9DE193"/>
        </linearGradient>
        <linearGradient id="SETH2__c" x1="13.286" x2="4.033" y1="5.553" y2="14.047" gradientUnits="userSpaceOnUse">
            <stop stopColor="#649F5A"/>
            <stop offset="1" stopColor="#6FB063"/>
        </linearGradient>
        <linearGradient id="SETH2__d" x1="12" x2="19.026" y1="4.286" y2="14.848" gradientUnits="userSpaceOnUse">
            <stop stopColor="#87D67C"/>
            <stop offset="1" stopColor="#88D77D"/>
        </linearGradient>
        <linearGradient id="SETH2__e" x1="8.143" x2="18.094" y1="10.53" y2="11.956" gradientUnits="userSpaceOnUse">
            <stop stopColor="#65A05B"/>
            <stop offset="1" stopColor="#53894D"/>
        </linearGradient>
        <linearGradient id="SETH2__f" x1="16.929" x2="12.429" y1="15.428" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78BF73"/>
            <stop offset="1" stopColor="#508D53"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSeth2.displayName = 'Seth2';

export default IconSeth2;
