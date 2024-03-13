
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBnt = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="m12.232 4.217-3.48 2.04 3.48 2.04 3.541-2.04zm.625 10.878v4.08l4.715-2.694V12.4zm3.429-7.56v4.08l-3.429 2.04v-4.08zm-8.572 4.08 3.858 2.04v-4.08l-3.858-2.04zm0 5.52 3.858 2.04v-4.088l-3.858-2.032z"/>
    </BaseIcon>
));

IconBnt.displayName = 'Bnt';

export default IconBnt;
