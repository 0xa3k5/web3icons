
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHbar = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M18 18.857h-2.143V15H8.143v3.857H6V5.143h2.143V9h7.714V5.143H18zm-9.857-6h7.714v-1.714H8.143z"/>
    </BaseIcon>
));

IconHbar.displayName = 'Hbar';
IconHbar.variants = 'mono';

export default IconHbar;
