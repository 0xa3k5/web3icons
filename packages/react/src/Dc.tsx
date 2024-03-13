
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m15.124 13.067-2.057-2.546V5.594L15.27 9.33l1.444-1.084 1.333 2.481zm3.022-2.16 2.426 4.522H3.429l3.668-5.246 3.549 3.287 2.314-2.756 2.13 2.64 3.056-2.442zm-10.929-.896 3.412 3.168 2.228-2.662V5.572L10.804 8.52 9.403 6.883z"/>
        </>
      ) : (
        <>
          <path fill="#F30" d="m15.124 13.067-2.057-2.546V5.594L15.27 9.33l1.444-1.084 1.333 2.481zm3.022-2.16 2.426 4.522H3.429l3.668-5.246 3.549 3.287 2.314-2.756 2.13 2.64 3.056-2.442zm-10.929-.896 3.412 3.168 2.228-2.662V5.572L10.804 8.52 9.403 6.883z"/>
        </>
      )}
    </BaseIcon>
));

IconDc.displayName = 'Dc';

export default IconDc;
