
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEurt = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M9.857 15.857h7.286v2.572H6.857V5.572h9.857v2.571H9.857v2.571h6.429v2.572h-6.43z"/>

    </BaseIcon>
));

IconEurt.displayName = 'Eurt';

export default IconEurt;
