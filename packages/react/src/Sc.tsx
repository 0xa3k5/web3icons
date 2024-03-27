
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.143 14.143V12A2.143 2.143 0 1 0 12 14.143zm-2.143-6a3.858 3.858 0 0 0 0 7.714h3.429a.43.43 0 0 0 .428-.428V12A3.857 3.857 0 0 0 12 8.143" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 5.572a6.429 6.429 0 1 0 0 12.857 6.429 6.429 0 0 0 0-12.857M5.143 12a6.857 6.857 0 1 1 13.714 0 6.857 6.857 0 0 1-13.714 0"/>
    <path fill="currentColor" d="M7.5 8.572a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      ) : (
        <>
          
    <path fill="#15D47B" d="M14.143 14.143V12A2.143 2.143 0 1 0 12 14.143zm-2.143-6a3.857 3.857 0 1 0 0 7.714h3.428a.43.43 0 0 0 .429-.428V12A3.857 3.857 0 0 0 12 8.143" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#15D47B" d="M12 5.572a6.429 6.429 0 1 0 0 12.857 6.429 6.429 0 0 0 0-12.857M5.143 12a6.857 6.857 0 1 1 13.713 0 6.857 6.857 0 0 1-13.713 0"/>
    <path fill="#15D47B" d="M7.5 8.572a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      )}
    </BaseIcon>
));

IconSc.displayName = 'Sc';

export default IconSc;
