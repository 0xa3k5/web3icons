
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSlcl = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="m10.32 14.957 1.071-2.057c-.917-.587-2.52-2.289-1.581-4.38 1.174-2.614 3.437-1.993 4.509-1.612l1.002-2.01c-1.757-.8-5.691-1.452-7.367 2.358-2.01 4.568 1.029 6.745 2.229 7.602l.137.103zm-1.873 4.149 1.024-2.088c1.003.42 3.296.76 4.423-1.234 1.406-2.494-.407-4.003-1.337-4.671l1.024-1.997c1.663.985 4.47 3.865 2.4 7.465-2.485 4.32-5.995 3.073-7.371 2.58z"/>

    </BaseIcon>
));

IconSlcl.displayName = 'Slcl';

export default IconSlcl;
