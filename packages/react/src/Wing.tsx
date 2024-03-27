
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWing = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m14.245 11.17-1.267 2.279-1.267 2.278L10.442 18l-1.267-2.276 1.267-2.278 1.268-2.277-1.924-3.455h2.534l.658 1.18zM7.25 7.715H4.714l3.192 5.733 1.269-2.276zm10.769 1.18-.658-1.18h-2.534l1.925 3.457-1.269 2.278-1.267 2.278L15.483 18l1.269-2.276 1.267-2.278 1.267-2.277z"/>

    </BaseIcon>
));

IconWing.displayName = 'Wing';

export default IconWing;
