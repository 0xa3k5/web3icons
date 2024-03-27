
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSolo = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M15.043 15.857c-.099.249-1.294 1.286-2.541 1.286-1.852 0-3.073-.673-3.073-2.014 0-1.234 1.543-1.826 3.437-2.512 2.284-.771 3.42-2.134 3.42-4.003 0-2.228-1.809-3.47-4.526-3.47-1.436 0-3.274.745-3.758 1.242l1.14 1.328c.458-.235 1.328-.857 2.6-.857 1.908 0 2.83.853 2.83 1.757 0 1.24-.7 1.81-2.632 2.516-2.366.87-4.226 1.916-4.226 3.862 0 2.048 1.483 3.865 4.788 3.865 1.35 0 2.914-.745 3.784-1.662z"/>

    </BaseIcon>
));

IconSolo.displayName = 'Solo';

export default IconSolo;
