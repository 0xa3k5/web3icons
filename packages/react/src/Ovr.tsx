
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOvr = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#29C2F6" d="M11.589 5.229c.261-.112.557-.112.822 0l4.959 2.177c.386.167.63.548.63.973v7.243c0 .428-.249.81-.63.977l-4.959 2.173a1.02 1.02 0 0 1-.822 0L6.63 16.599a1.06 1.06 0 0 1-.63-.977V8.379c0-.425.249-.806.63-.973z"/>
    <path fill="#0451C8" d="M11.704 6.922a.71.71 0 0 1 .592 0l3.54 1.628c.274.129.45.416.45.733v5.434a.79.79 0 0 1-.45.729l-3.54 1.629a.68.68 0 0 1-.592 0l-3.54-1.63a.8.8 0 0 1-.45-.728V9.283c0-.317.176-.604.45-.729l3.54-1.628z"/>
    <path fill="#ED723A" d="M6.189 16.235A1.1 1.1 0 0 1 6 15.622V8.379c0-.223.069-.433.189-.609L12 10.286v3.428z"/>
    <path fill="url(#OVR__a)" d="M8.091 15.407a.81.81 0 0 1-.377-.69V9.283a.8.8 0 0 1 .377-.69L12 10.286v3.428z"/>
    <path fill="url(#OVR__b)" d="M17.811 7.77c.12.172.189.386.189.609v7.243c0 .223-.069.437-.189.613L12 13.715v-3.43z"/>
    <path fill="url(#OVR__c)" d="M15.909 8.593a.8.8 0 0 1 .377.69v5.434a.8.8 0 0 1-.377.69L12 13.714v-3.428z"/>
    <path fill="url(#OVR__d)" d="M17.811 16.235a1.06 1.06 0 0 1-.441.364l-4.959 2.173a1 1 0 0 1-.411.085v-5.142z"/>
    <path fill="#3C75D2" d="m15.909 15.407-.073.043-3.54 1.629a.7.7 0 0 1-.296.064v-3.429z"/>
    <path fill="url(#OVR__e)" d="M12.009 5.143 12 10.286 6.189 7.77a1 1 0 0 1 .441-.364l4.959-2.177c.132-.056.278-.086.42-.086"/>
    <path fill="url(#OVR__f)" d="M12.004 6.857 12 10.286 8.091 8.593l.073-.043 3.54-1.628a.8.8 0 0 1 .3-.065"/>
    <path fill="url(#OVR__g)" d="M11.991 5.143 12 10.286l5.811-2.516a1 1 0 0 0-.441-.364l-4.959-2.177a1.1 1.1 0 0 0-.42-.086"/>
    <path fill="#6334AA" d="m15.909 8.593-.073-.043-3.54-1.628a.8.8 0 0 0-.3-.065L12 10.286z"/>
    <path fill="url(#OVR__h)" d="M15 12a3 3 0 1 1-5.999 0A3 3 0 0 1 15 12"/>
    <defs>
        <linearGradient id="OVR__a" x1="6" x2="17.4" y1="11.035" y2="11.035" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E14719"/>
            <stop offset="1" stopColor="#EC6813"/>
        </linearGradient>
        <linearGradient id="OVR__b" x1="10.311" x2="15.517" y1="8.171" y2="19.234" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DF62AF"/>
            <stop offset="1" stopColor="#D4438D"/>
        </linearGradient>
        <linearGradient id="OVR__c" x1="6" x2="16.477" y1="9.844" y2="12.971" gradientUnits="userSpaceOnUse">
            <stop stopColor="#894EBA"/>
            <stop offset="1" stopColor="#95428A"/>
        </linearGradient>
        <linearGradient id="OVR__d" x1="7.142" x2="16.464" y1="17.133" y2="14.88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#68D5FF"/>
            <stop offset="1" stopColor="#29C2F6"/>
        </linearGradient>
        <linearGradient id="OVR__e" x1="18" x2="7.32" y1="5.143" y2="12.608" gradientUnits="userSpaceOnUse">
            <stop offset=".17" stopColor="#FAC35F"/>
            <stop offset="1" stopColor="#F9A56E"/>
        </linearGradient>
        <linearGradient id="OVR__f" x1="6.539" x2="19.992" y1="12.001" y2="14.933" gradientUnits="userSpaceOnUse">
            <stop offset=".2" stopColor="#F68D44"/>
            <stop offset="1" stopColor="#F8B136"/>
        </linearGradient>
        <linearGradient id="OVR__g" x1="6" x2="17.355" y1="10.629" y2="10.629" gradientUnits="userSpaceOnUse">
            <stop offset=".21" stopColor="#945ED3"/>
            <stop offset="1" stopColor="#BF3C90"/>
        </linearGradient>
        <linearGradient id="OVR__h" x1="9.373" x2="12" y1="10.071" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset=".64" stopColor="#FDFAF8"/>
            <stop offset="1" stopColor="#FDFAF8" stopOpacity=".4"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconOvr.displayName = 'Ovr';

export default IconOvr;
