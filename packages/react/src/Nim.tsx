
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNim = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#NIM__a)" d="m18.703 11.443-2.859-4.886A1.14 1.14 0 0 0 14.86 6H9.14a1.16 1.16 0 0 0-.985.557l-2.859 4.886a1.1 1.1 0 0 0 0 1.114l2.859 4.886A1.14 1.14 0 0 0 9.14 18h5.717a1.16 1.16 0 0 0 .986-.557l2.859-4.886a1.1 1.1 0 0 0 0-1.114"/>
    <defs>
        <radialGradient id="NIM__a" cx="0" cy="0" r="1" gradientTransform="matrix(13.7193 0 0 13.505 15.459 17.846)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EC991C"/>
            <stop offset="1" stopColor="#E9B213"/>
        </radialGradient>
    </defs>

    </BaseIcon>
));

IconNim.displayName = 'Nim';

export default IconNim;
