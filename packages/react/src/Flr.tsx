
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFlr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.772 11.143H9.574c-1.701 0-3.098 1.29-3.141 2.923 0 .043.034.077.086.077h6.201c1.702.009 3.099-1.29 3.142-2.923a.086.086 0 0 0-.086-.077zm3-4.714h-9.24a3.047 3.047 0 0 0-3.103 2.923c0 .042.034.077.077.077h9.244a3.05 3.05 0 0 0 3.107-2.923c0-.043-.038-.077-.081-.077zM7.929 18.857a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>

        </>
      ) : (
        <>
          
    <path fill="#E62058" d="M15.772 11.143H9.574c-1.701 0-3.098 1.29-3.141 2.923 0 .043.034.077.086.077h6.201c1.702.009 3.099-1.29 3.142-2.923a.086.086 0 0 0-.086-.077zm3-4.714h-9.24a3.047 3.047 0 0 0-3.103 2.923c0 .042.034.077.077.077h9.244a3.05 3.05 0 0 0 3.107-2.923c0-.043-.038-.077-.081-.077zM7.929 18.857a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>

        </>
      )}
    </BaseIcon>
));

IconFlr.displayName = 'Flr';

export default IconFlr;
