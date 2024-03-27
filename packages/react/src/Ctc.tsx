
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCtc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m17.914 9.442-1.538.471a4.68 4.68 0 0 0-4.359-2.627c-3.309 0-4.731 2.824-4.731 4.71 0 1.487 1.054 4.718 4.714 4.718 2.738 0 4.191-2.198 4.376-2.588l1.624.386c-.15.587-1.993 3.908-5.983 3.908-3.557 0-6.446-2.876-6.446-6.424s2.889-6.424 6.446-6.424c3.561 0 5.546 2.742 5.897 3.87"/>
    <path fill="currentColor" d="M12.81 11.143h6.476v1.714H12.81z"/>
    <path fill="currentColor" d="M12 13.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/>

    </BaseIcon>
));

IconCtc.displayName = 'Ctc';

export default IconCtc;
