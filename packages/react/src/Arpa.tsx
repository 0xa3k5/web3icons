
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArpa = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#5A5967" d="m5.88 17.143-.737-1.286h10.782L12 8.983l.724-1.273 5.374 9.433z"/><path fill="url(#ARPA__a)" d="M12.72 5.143 7.328 14.57h1.47l3.922-6.857 5.378 9.429.759-1.299z"/><path fill="url(#ARPA__b)" d="m5.143 15.857 6.154-10.714h1.427l-5.4 9.428h7.869l.732 1.286z"/><defs><linearGradient id="ARPA__a" x1="12.827" x2="13.105" y1="5.16" y2="16.8" gradientUnits="userSpaceOnUse"><stop stopColor="#CBCCCD"/><stop offset="1" stopColor="#939493"/></linearGradient><linearGradient id="ARPA__b" x1="12.12" x2="5.49" y1="5.143" y2="15.806" gradientUnits="userSpaceOnUse"><stop stopColor="#DCEBF5"/><stop offset="1" stopColor="#B9C6CC"/></linearGradient></defs>
    </BaseIcon>
));

IconArpa.displayName = 'Arpa';

export default IconArpa;
