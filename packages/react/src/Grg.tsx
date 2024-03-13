
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGrg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#054186" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"/><path fill="#FFAE00" d="m9.857 9.429.858-6-6.858 6.857z"/><path fill="#FFCA57" d="m9.857 9.429-6 .857L15 14.572z"/><path fill="#fff" d="m10.715 3.429-.858 6L15 14.572z"/>
    </BaseIcon>
));

IconGrg.displayName = 'Grg';

export default IconGrg;
