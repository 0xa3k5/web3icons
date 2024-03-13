
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconErg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="m12 4.714 5.151 2.135L19.286 12l-2.135 5.151-5.15 2.135-5.152-2.135-2.135-5.15L6.85 6.848zm0 .857 4.543 1.886L18.429 12l-1.886 4.543L12 18.429l-4.543-1.886L5.572 12l1.885-4.543zm2.143 3.43H9.857v.856L11.683 12l-1.826 2.143V15h4.286v-.857h-3.099L12.857 12l-1.813-2.143h3.099z" fillRule="evenodd" clipRule="evenodd"/>
    </BaseIcon>
));

IconErg.displayName = 'Erg';

export default IconErg;
