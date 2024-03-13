
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDag = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M12.022 4.286 5.143 8.164v7.667L12 19.714l6.857-3.883V8.164zM5.777 8.293l5.614-3.184-3.741 6.398zm6.326-3.424 5.687 3.274h-7.607zm6.325 3.703v6.325l-3.857-6.325zm-.248 7.08-5.623 3.17 3.763-6.385zm-6.334 3.45-5.623-3.245h7.564zM5.57 15.429V9.086l3.823 6.343zM9.6 9.06l-1.65 2.803 1.65.934zm3.737-.488h-3.3v1.825zm.717.001-.001-.001h.004zm1.657 2.866-1.657-2.866-1.643.993zm-1.35 3.458 1.646-2.803-1.646-.934zm-3.745.532h3.3l-.009-1.856zM8.24 12.527 9.9 15.43l1.628-1.012zm3.737-2.721-1.928 1.101v2.16l1.928 1.102 1.933-1.102v-2.16z" fillRule="evenodd" clipRule="evenodd"/>
    </BaseIcon>
));

IconDag.displayName = 'Dag';

export default IconDag;
