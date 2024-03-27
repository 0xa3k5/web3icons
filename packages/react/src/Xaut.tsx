
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconXaut = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#fff" d="M12 13.286c2.604 0 4.714-.384 4.714-.858 0-.473-2.11-.857-4.714-.857-2.603 0-4.714.384-4.714.857 0 .474 2.11.858 4.714.858"/>
    <path fill="#fff" d="M17.363 5.571H6.613L3.429 12.56 12 21l8.572-8.44zm-4.506 8.126c2.433-.102 4.288-.631 4.288-1.269 0-.71-2.303-1.285-5.143-1.285s-5.143.575-5.143 1.285c0 .637 1.853 1.166 4.284 1.268v3.875h1.714z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#DDA85B" d="M15.857 8.143H8.143v1.714h3v3h1.714v-3h3z"/>

    </BaseIcon>
));

IconXaut.displayName = 'Xaut';

export default IconXaut;
