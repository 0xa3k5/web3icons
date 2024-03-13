
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMtrm = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#F7DF53" d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0"/><path fill="#8117C9" d="M12 18.986a6.985 6.985 0 1 0 0-13.971 6.985 6.985 0 0 0 0 13.97m0 .3a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/><path fill="#440090" d="M18.128 12a6.128 6.128 0 1 1-12.256 0 6.128 6.128 0 0 1 12.256 0"/><path fill="#2F0065" d="M17.567 12a5.567 5.567 0 1 1-11.134 0 5.567 5.567 0 0 1 11.134 0"/><path fill="#030007" d="M16.95 12a4.95 4.95 0 1 1-9.9 0 4.95 4.95 0 0 1 9.9 0"/>
    </BaseIcon>
));

IconMtrm.displayName = 'Mtrm';

export default IconMtrm;
