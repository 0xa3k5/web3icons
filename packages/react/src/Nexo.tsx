
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNexo = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#3CA9E5" d="m8.29 5.574 7.557 4.253v4.339L4.287 7.663 7.992 5.58a.32.32 0 0 1 .297 0z"/>
    <path fill="#2853C3" d="m15.853 5.487-3.855 2.17 3.855 2.17z"/>
    <path fill="#1A4199" d="m15.853 5.487 3.708 2.083a.3.3 0 0 1 .148.255v8.51l-3.856-2.164z"/>
    <path fill="#2853C3" d="m19.715 16.338-3.713 2.086a.32.32 0 0 1-.314 0L8.13 14.171v-4.35z"/>
    <path fill="#60BEFF" d="M4.286 7.657v8.51a.3.3 0 0 0 .148.266l3.708 2.083V9.827z"/>
    <path fill="#3CA9E5" d="m8.142 18.51 3.856-2.169-3.856-2.175z"/>

    </BaseIcon>
));

IconNexo.displayName = 'Nexo';

export default IconNexo;
