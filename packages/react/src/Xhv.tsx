
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconXhv = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M14.143 9.557 7.714 13.51v4.063h2.143v-3.09l6.429-3.96V6.429h-2.143zm-1.286-.664v-3.75h4.715v6.142l-6.429 3.865v3.707H6.429V12.78zM6.43 5.143h4.714v3.75l-1.286.66V6.43H7.714v4.444l-1.285.66zm6.428 10.003 1.286-.673v3.099h2.143v-4.427l1.286-.665v6.377h-4.715z"/>

    </BaseIcon>
));

IconXhv.displayName = 'Xhv';

export default IconXhv;
