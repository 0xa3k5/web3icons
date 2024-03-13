
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCpool = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#CPOOL__a)" d="M12.429 4.5a7.5 7.5 0 0 0 0 15z"/><path fill="#fff" d="M12.643 8.571a3.429 3.429 0 1 0 3.017 5.058l1.886 1.028a5.572 5.572 0 1 1 0-5.314L15.66 10.37a3.43 3.43 0 0 0-3.017-1.8"/><path fill="url(#CPOOL__b)" d="M12.429 4.5a7.5 7.5 0 0 0 0 15z" opacity=".5"/><defs><linearGradient id="CPOOL__a" x1="12.429" x2="10.929" y1="4.924" y2="18.861" gradientUnits="userSpaceOnUse"><stop stopColor="#23B77F"/><stop offset=".44" stopColor="#2857B3"/><stop offset=".65" stopColor="#396CC6"/><stop offset=".82" stopColor="#5AA3EA"/><stop offset="1" stopColor="#92F5EA"/></linearGradient><linearGradient id="CPOOL__b" x1="12.429" x2="10.929" y1="4.924" y2="18.861" gradientUnits="userSpaceOnUse"><stop stopColor="#23B77F"/><stop offset=".44" stopColor="#2857B3"/><stop offset=".65" stopColor="#396CC6"/><stop offset=".82" stopColor="#5AA3EA"/><stop offset="1" stopColor="#92F5EA"/></linearGradient></defs>
    </BaseIcon>
));

IconCpool.displayName = 'Cpool';

export default IconCpool;
