
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAkt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.429 14.143 12 18.428h5.143l-2.571-4.285z" opacity=".6"/>
    <path fill="currentColor" d="m9 5.143 8.156 13.285 2.558-4.444-5.597-8.841z"/>
    <path fill="currentColor" d="m6.986 9.429-2.7 4.5 2.7 4.5 5.443-9z"/>

        </>
      ) : (
        <>
          
    <path fill="#DB4533" d="m9 5.143 8.156 13.285 2.559-4.444-5.597-8.841z"/>
    <path fill="#A12E2A" d="M9.429 14.143 12 18.428h5.143l-2.571-4.285z"/>
    <path fill="#DB4533" d="m6.986 9.429-2.7 4.5 2.7 4.5 5.443-9z"/>

        </>
      )}
    </BaseIcon>
));

IconAkt.displayName = 'Akt';

export default IconAkt;
