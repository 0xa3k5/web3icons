
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAioz = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m1.294-3.621V10.34l-4.55 5.31a.65.65 0 0 1-.42.206.58.58 0 0 1-.61-.574v-.017c0-.133.052-.266.142-.373l5.571-6.527a.66.66 0 0 1 .498-.223.64.64 0 0 1 .647.63v6.463a.63.63 0 0 1-.643.621.63.63 0 0 1-.635-.621"/>
    </BaseIcon>
));

IconAioz.displayName = 'Aioz';
IconAioz.variants = 'mono';

export default IconAioz;
