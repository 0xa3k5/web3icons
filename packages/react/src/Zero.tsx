
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZero = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 18.48a6.48 6.48 0 1 0 0-12.96 6.48 6.48 0 0 0 0 12.96m0 .377a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 18.103a6.103 6.103 0 1 0 0-12.206 6.103 6.103 0 0 0 0 12.206m0 .377a6.48 6.48 0 1 0 0-12.96 6.48 6.48 0 0 0 0 12.96" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M14.572 9H9.429v1.286h3.128L9.43 14.015V15h5.143v-1.286h-3.077L14.572 10z"/>

        </>
      ) : (
        <>
          
    <path fill="#FCE058" d="M12 18.48a6.48 6.48 0 1 0 0-12.96 6.48 6.48 0 0 0 0 12.96m0 .377a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#fff" d="M12 18.103a6.103 6.103 0 1 0 0-12.206 6.103 6.103 0 0 0 0 12.206m0 .377a6.48 6.48 0 1 0 0-12.96 6.48 6.48 0 0 0 0 12.96" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#fff" d="M14.571 9H9.428v1.286h3.129l-3.129 3.729V15h5.143v-1.286h-3.077L14.571 10z"/>

        </>
      )}
    </BaseIcon>
));

IconZero.displayName = 'Zero';

export default IconZero;
