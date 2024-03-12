
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAqua = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#AQUA__a)" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"/><defs><linearGradient id="AQUA__a" x1="8.357" x2="15.428" y1="6.643" y2="17.571" gradientUnits="userSpaceOnUse"><stop stopColor="#55B6FF"/><stop offset=".2" stopColor="#4377EC"/><stop offset=".43" stopColor="#2B2CAE"/><stop offset="1" stopColor="#1F123E"/></linearGradient></defs>
    </BaseIcon>
));

IconAqua.displayName = 'Aqua';
IconAqua.variants = 'branded';

export default IconAqua;
