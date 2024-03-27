
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOng = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.143 12.622V5.143L16.286 16.93a7.86 7.86 0 0 1-3.352 1.83c-.758.171-3.02.287-5.09-1.2-2.07-1.479-2.7-3.845-2.7-4.933zm13.714-1.243v7.478L7.714 7.072a7.86 7.86 0 0 1 3.352-1.83c.758-.172 3.021-.288 5.091 1.2 2.07 1.478 2.7 3.844 2.7 4.932z"/>

        </>
      ) : (
        <>
          
    <path fill="#329AFA" d="M5.143 12.622V5.143L16.285 16.93a7.86 7.86 0 0 1-3.351 1.83c-.759.171-3.021.287-5.091-1.2-2.07-1.479-2.7-3.845-2.7-4.933zm13.714-1.243v7.478L7.714 7.072a7.86 7.86 0 0 1 3.351-1.83c.759-.172 3.022-.288 5.092 1.2 2.07 1.478 2.7 3.844 2.7 4.932z"/>

        </>
      )}
    </BaseIcon>
));

IconOng.displayName = 'Ong';

export default IconOng;
