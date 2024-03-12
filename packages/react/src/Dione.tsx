
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDione = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#30128D" d="M12 19.714a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428"/><path fill="#7D1FA9" d="M12 18.351a6.351 6.351 0 1 0 0-12.703 6.351 6.351 0 0 0 0 12.703"/><path fill="#FB88F3" d="M12 16.804a4.804 4.804 0 1 0 0-9.608 4.804 4.804 0 0 0 0 9.608"/><path fill="#E7B2F8" d="M12 16.423a4.423 4.423 0 1 0 0-8.846 4.423 4.423 0 0 0 0 8.846"/><path fill="url(#DIONE__a)" d="M15.909 12.146c0 2.228-1.491 3.214-3.681 3.775-.973.253-1.788.142-2.499 0-1.14-.227-1.753-1.028-2.087-2.142a2.8 2.8 0 0 1-.09-.85c0-1.615 2.108-4.808 4.328-4.808a4.03 4.03 0 0 1 4.029 4.029z"/><defs><linearGradient id="DIONE__a" x1="14.555" x2="8.07" y1="9.549" y2="14.73" gradientUnits="userSpaceOnUse"><stop stopColor="#6DDFF4"/><stop offset=".42" stopColor="#10FDF7"/><stop offset=".65" stopColor="#20DFFB"/><stop offset="1" stopColor="#688FEB"/></linearGradient></defs>
    </BaseIcon>
));

IconDione.displayName = 'Dione';
IconDione.variants = 'branded';

export default IconDione;
