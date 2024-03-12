
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAmkt = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M9.073 7.577c-2.645 0-4.787 2.057-4.787 4.594 0 2.306 1.774 4.218 4.084 4.543l4.453-7.401a4.86 4.86 0 0 0-3.75-1.736"/><path fill="currentColor" d="m14.04 7.286-1.217 2.027 4.448 7.401h2.443z"/>
    </BaseIcon>
));

IconAmkt.displayName = 'Amkt';
IconAmkt.variants = 'mono';

export default IconAmkt;
