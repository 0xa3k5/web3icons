
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGft = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#DFF8DA" d="m12 5.053 6.176 3.471v6.952l-6.172 3.471-6.18-3.471V8.524L12 5.057z"/>
    <path fill="#3B896A" d="m7.277 12.639-1.843-2.11 3.27-.616z"/>
    <path fill="#4ED9AB" d="M8.571 16.971v-4.855l3.587-6.39 3.043 5.957z"/>
    <path fill="#3B896A" d="m16.11 17.07-4.02-2.254 3.248-2.478z"/>
    <path fill="#4CDAC7" d="m15.467 11.439-1.239-2.422 3.669.784z"/>
    <path fill="#4ED9AB" d="M8.014 11.751 6.171 9.643l3.27-.617z"/>
    <path fill="#4EDBC8" d="M18.857 8.143 12 4.286 5.143 8.143v7.714L12 19.714l6.857-3.857zM18 8.61l-6-3.394L6 8.61v6.776l6 3.394 6-3.394z" fillRule="evenodd" clipRule="evenodd"/>

    </BaseIcon>
));

IconGft.displayName = 'Gft';

export default IconGft;
