
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconQmall = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M20.143 18.857h-1.655l-1.898-1.761a6.857 6.857 0 1 1 1.543-2.032l-1.02-.844a5.572 5.572 0 1 0-1.47 1.997l-.948-.883a4.286 4.286 0 1 1 .866-.947zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>

    </BaseIcon>
));

IconQmall.displayName = 'Qmall';

export default IconQmall;
