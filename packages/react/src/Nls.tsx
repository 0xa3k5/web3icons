
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNls = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713M9.694 8.572a1.123 1.123 0 0 0-1.122 1.123v4.61a1.123 1.123 0 0 0 1.123 1.124h4.61a1.123 1.123 0 0 0 1.124-1.123V9.695a1.123 1.123 0 0 0-1.123-1.123z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#FF562D" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M9.694 8.572a1.123 1.123 0 0 0-1.123 1.123v4.61a1.123 1.123 0 0 0 1.123 1.124h4.611a1.123 1.123 0 0 0 1.123-1.123V9.695a1.123 1.123 0 0 0-1.123-1.123z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconNls.displayName = 'Nls';

export default IconNls;
