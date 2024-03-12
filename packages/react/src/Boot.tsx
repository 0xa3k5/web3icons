
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBoot = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#00A200" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"/><path fill="url(#BOOT__a)" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" fillOpacity=".61"/><defs><linearGradient id="BOOT__a" x1="12" x2="12" y1="6" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#7DFF7D"/><stop offset=".56" stopColor="#00A200"/></linearGradient></defs>
    </BaseIcon>
));

IconBoot.displayName = 'Boot';
IconBoot.variants = 'branded';

export default IconBoot;
