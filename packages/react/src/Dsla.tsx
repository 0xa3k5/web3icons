
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDsla = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#FFE1A5" d="m5.812 7.663-.669 1.144a6.87 6.87 0 0 0 2.516 9.386l1.144.66a6.87 6.87 0 0 0 9.386-2.516l.66-1.144a6.87 6.87 0 0 0-2.516-9.386l-1.144-.66a6.87 6.87 0 0 0-9.386 2.516z"/><path fill="#F69D88" d="M12.973 4.757h-1.945a6.266 6.266 0 0 0-6.27 6.275v1.945a6.263 6.263 0 0 0 6.265 6.266h1.946a6.263 6.263 0 0 0 6.266-6.266v-1.946a6.263 6.263 0 0 0-6.266-6.265z"/><path fill="#2196F3" d="M12 19.097a7.097 7.097 0 1 0 0-14.194 7.097 7.097 0 0 0 0 14.194"/><path fill="#F0F3FA" d="m15 6.857-2.185 3.737 2.147 1.295L9 17.143l2.16-3.759L9 12.13z"/>
    </BaseIcon>
));

IconDsla.displayName = 'Dsla';
IconDsla.variants = 'branded';

export default IconDsla;
