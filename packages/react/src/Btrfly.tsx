
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBtrfly = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="m11.781 11.079.236.92.202-.92 5.07-3.793h2.425l-.66 3.347-2.34 1.787v.437h.575l.44 2.014L15.305 18h-.218l-1.543-2.229-.883 1.372h-.219l-.223-.429h-.432l-.223.429h-.219l-.883-1.372L8.918 18H8.7L6.274 14.87l.442-2.014h.57v-.437l-2.34-1.787-.66-3.347H6.71z"/>
    </BaseIcon>
));

IconBtrfly.displayName = 'Btrfly';
IconBtrfly.variants = 'mono';

export default IconBtrfly;
