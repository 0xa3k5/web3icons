
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLovely = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.143 13.714h6v5.572c-2.743-1.23-5.143-4.226-6-5.572m13.286 0h-6v5.572c2.743-1.23 5.143-4.226 6-5.572M5.546 12.43h5.597V8.37A2.81 2.81 0 0 0 8.44 6.429c-2.139 0-3.296 2.85-3.296 3.857 0 .81.27 1.765.403 2.143m13.277 0H12.43V7.8c.214-.694 1.14-1.8 3.09-1.8 2.443 0 3.767 3.051 3.767 4.136 0 .865-.309 1.885-.463 2.293"/>
        </>
      ) : (
        <>
          <path fill="#D8337B" d="M5.143 13.714h6v5.572c-2.743-1.23-5.143-4.226-6-5.572m13.285 0h-6v5.572c2.743-1.23 5.143-4.226 6-5.572M5.545 12.43h5.598V8.37a2.81 2.81 0 0 0-2.705-1.941c-2.138 0-3.295 2.85-3.295 3.857 0 .81.27 1.765.402 2.143m13.278 0h-6.395V7.8c.215-.694 1.14-1.8 3.09-1.8 2.443 0 3.767 3.051 3.767 4.136 0 .865-.308 1.885-.462 2.293"/>
        </>
      )}
    </BaseIcon>
));

IconLovely.displayName = 'Lovely';
IconLovely.variants = 'brandedmono';

export default IconLovely;
