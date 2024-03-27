
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCkb = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#fff" d="M5.143 6v7.286h2.142V6zm11.571 4.714V18h2.143v-7.286zM12 6v4.98l2.143 2.207V8.143zm-2.143 4.903v4.954L12 18v-4.796z"/>
    <path fill="#D8D8D8" d="M12 6h2.284l4.573 4.714h-2.143zm-6.857 7.286h2.142L12 18H9.715z"/>
    <path fill="#3CC68A" d="M14.143 8.143v5.018l-6.857-7.07v7.195l2.572 2.571v-4.83L16.715 18v-7.286z"/>

    </BaseIcon>
));

IconCkb.displayName = 'Ckb';

export default IconCkb;
