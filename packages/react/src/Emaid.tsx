
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEmaid = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#99BCE3" d="m14.143 9.887-1.715.973v3.939l-7.285-4.273v1.834c0 .454.24.87.63 1.101l8.37 4.967z"/><path fill="#5892CD" d="M12.428 14.799v-2.14l-3.214-1.92 7.071-4.272-1.525-.759a1.29 1.29 0 0 0-1.213.03l-8.404 4.788z"/><path fill="#2A5789" d="m10.928 11.807-1.714-1.071 7.071-4.265v9.798c0 .42-.205.814-.548 1.05l-1.594 1.11V9.887z"/>
    </BaseIcon>
));

IconEmaid.displayName = 'Emaid';

export default IconEmaid;
