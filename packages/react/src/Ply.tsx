
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPly = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#8DD9F6" d="M13.285 17.571a5.571 5.571 0 1 0 0-11.142 5.571 5.571 0 0 0 0 11.142"/><path fill="#6161F6" d="M14.194 13.056a1.286 1.286 0 0 0-.012-2.199L7.09 6.605a1.286 1.286 0 0 0-1.947 1.102v8.608A1.286 1.286 0 0 0 7.1 17.41z"/>
    </BaseIcon>
));

IconPly.displayName = 'Ply';

export default IconPly;
