
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconQuartz = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m4.286 15.857-.857-.908.891-.806h5.537L5.572 9.857V8.572h1.285l4.286 4.384v-5.67L12 6.429l.857.857v5.67l4.286-4.384h1.286v1.285l-4.286 4.286h5.571l.858.857-.858.857h-6.428L12 14.572l-1.286 1.285z"/>

    </BaseIcon>
));

IconQuartz.displayName = 'Quartz';

export default IconQuartz;
