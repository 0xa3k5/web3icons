
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAvinoc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M8.254 5.572h5.829L11.79 6.857H9.086L6.17 12l2.915 5.143h5.828L17.62 12l-1.247-2.143.21-2.571L19.286 12l-3.54 6.429H8.254L4.714 12z"/><path fill="currentColor" d="m8.254 10.714 7.702-5.142-1.042 9-2.082-3.858z"/>
    </BaseIcon>
));

IconAvinoc.displayName = 'Avinoc';

export default IconAvinoc;
