
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGaleon = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.857 11.571c0 1.835-1.286 4.008-3 4.573v.999h4.714L18.428 15h-.857c-.214.429-.771 1.286-1.285 1.286H14.97a5.572 5.572 0 1 0-5.94 0H7.714c-.514 0-1.071-.857-1.286-1.286h-.857l.857 2.143h4.715v-.999c-1.715-.565-3-2.738-3-4.573 0-2.13 1.727-4.714 3.857-4.714s3.857 2.584 3.857 4.714"/>
        </>
      ) : (
        <>
          <path fill="#0091CC" d="M15.857 11.571c0 1.835-1.286 4.008-3 4.573v.999h4.714L18.428 15h-.857c-.214.429-.771 1.286-1.285 1.286H14.97a5.572 5.572 0 1 0-5.94 0H7.714c-.514 0-1.071-.857-1.286-1.286h-.857l.857 2.143h4.715v-.999c-1.715-.565-3-2.738-3-4.573 0-2.13 1.727-4.714 3.857-4.714s3.857 2.584 3.857 4.714"/>
        </>
      )}
    </BaseIcon>
));

IconGaleon.displayName = 'Galeon';

export default IconGaleon;
