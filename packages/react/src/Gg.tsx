
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#5F2596" d="M4.286 15.75v-5.379l2.572 1.338v5.421z"/>
    <path fill="url(#GG__a)" d="M19.715 15.75v-5.379l-2.572 1.338v5.421z"/>
    <path fill="url(#GG__b)" d="m12 14.194-5.142 2.949v-5.4L12 8.846z"/>
    <path fill="#5E2693" d="m12 14.194 5.143 2.949v-5.4L12 8.846z"/>
    <path fill="url(#GG__c)" d="m6.858 11.743-2.572-1.38L11.983 6l7.732 4.363-2.572 1.38-5.147-2.872z"/>
    <defs>
        <linearGradient id="GG__a" x1="12" x2="12" y1="6" y2="17.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F17750"/>
            <stop offset=".36" stopColor="#E26891"/>
            <stop offset=".65" stopColor="#D45AC7"/>
            <stop offset="1" stopColor="#B071D9"/>
        </linearGradient>
        <linearGradient id="GG__b" x1="12" x2="12" y1="6" y2="17.143" gradientUnits="userSpaceOnUse">
            <stop offset=".06" stopColor="#EF7C3B"/>
            <stop offset=".39" stopColor="#EA6D75"/>
            <stop offset="1" stopColor="#B961DC"/>
        </linearGradient>
        <linearGradient id="GG__c" x1="12" x2="12" y1="6" y2="11.743" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EEC985"/>
            <stop offset=".38" stopColor="#FDBD4D"/>
            <stop offset=".93" stopColor="#FCA143"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconGg.displayName = 'Gg';

export default IconGg;
