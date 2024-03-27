
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCtsi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.8 9.857h-2.71l-1.86 2.173.746 2.113h5.396zm-5.786 0H5.67l1.478 4.286h2.7l1.895-2.199z"/>
    <path fill="currentColor" d="m8.76 9.429 3.523-3.72 1.508 3.985-1.714 1.937-.823-2.203zm6.446 5.142-3.532 3.725-1.508-3.986 1.714-1.937.827 2.198h2.503z"/>

        </>
      ) : (
        <>
          
    <path fill="#131619" d="M16.8 9.857h-2.71l-1.86 2.173.746 2.113h5.396zm-5.786 0H5.67l1.478 4.286h2.7l1.895-2.199z"/>
    <path fill="#131619" d="m8.76 9.429 3.523-3.72 1.508 3.985-1.714 1.937-.823-2.203zm6.446 5.142-3.532 3.725-1.508-3.986 1.714-1.937.827 2.198h2.503z"/>

        </>
      )}
    </BaseIcon>
));

IconCtsi.displayName = 'Ctsi';

export default IconCtsi;
