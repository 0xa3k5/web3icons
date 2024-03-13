
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIost = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M12 4.286 5.143 8.14v7.718L12 19.714l6.857-3.855V8.14zm.143 12.501L6.876 13.86l.025-1.424 5.236 2.921 2.525-1.423-1.689-.947-.636.353-1.184-.662.63-.36-.83-.47-.499.285-1.197-.668.505-.285-2.68-1.51 5.055-2.847 4.776 2.655-1.285.725-3.49-1.95L9.612 9.67l1.415.798.717-.414 1.196.668-.73.408.83.47.592-.333 1.191.662-.598.34 2.967 1.672z"/>
    </BaseIcon>
));

IconIost.displayName = 'Iost';

export default IconIost;
