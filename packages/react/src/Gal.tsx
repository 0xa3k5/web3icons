
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGal = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="m5.571 18.429 11.529-9.6A1.372 1.372 0 1 0 15.17 6.9zm5.563-10.226-4.856 3.643L9.921 6.99a.866.866 0 1 1 1.213 1.213m5.876 5.876-4.856 3.642 3.643-4.855a.865.865 0 1 1 1.213 1.213"/>
    </BaseIcon>
));

IconGal.displayName = 'Gal';
IconGal.variants = 'mono';

export default IconGal;
