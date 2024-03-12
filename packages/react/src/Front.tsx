
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFront = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="m17.143 5.143-.471 1.26C15.45 9.51 14.502 10.99 13.5 10.99c-.621 0-1.067-.292-1.5-.699-.321-.304-.454-.381-.763-.381-.158 0-.446.214-.814.707a12 12 0 0 0-1.269 2.241h4.32l-.617 1.286H9v4.714H7.714V5.143zM15.429 6.43 9 6.416v4.573c.806-1.449 2.087-3.095 3.694-1.633.236.218.455.471.802.471.283 0 .994-1.084 1.933-3.398"/>
    </BaseIcon>
));

IconFront.displayName = 'Front';
IconFront.variants = 'mono';

export default IconFront;
