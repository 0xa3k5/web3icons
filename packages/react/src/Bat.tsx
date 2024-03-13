
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBat = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 5.143a.3.3 0 0 0-.255.148L5.61 15.846a.3.3 0 0 0 0 .296l3.743-2 2.647-4.715zM18.389 15.846 12.256 5.29A.3.3 0 0 0 12 5.143v4.285l2.64 4.723 3.75 1.992a.3.3 0 0 0-.001-.297"/><path fill="currentColor" d="m18.389 16.148-3.746-2.005H9.357l-3.746 2.005a.3.3 0 0 0 .108.1.3.3 0 0 0 .148.038H18.13a.3.3 0 0 0 .149-.037.3.3 0 0 0 .109-.1"/>
        </>
      ) : (
        <>
          <path fill="#FF4724" d="M12 5.143a.3.3 0 0 0-.255.148L5.61 15.846a.3.3 0 0 0 0 .296l3.743-2 2.647-4.715zM18.389 15.846 12.256 5.29A.3.3 0 0 0 12 5.143v4.285l2.64 4.723 3.75 1.992a.3.3 0 0 0-.001-.297"/><path fill="#FF4724" d="m18.389 16.148-3.746-2.005H9.357l-3.746 2.005a.3.3 0 0 0 .108.1.3.3 0 0 0 .148.038H18.13a.3.3 0 0 0 .149-.037.3.3 0 0 0 .109-.1"/>
        </>
      )}
    </BaseIcon>
));

IconBat.displayName = 'Bat';

export default IconBat;
