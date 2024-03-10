
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBat = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 5.143a.3.3 0 0 0-.255.148L5.61 15.846a.3.3 0 0 0 0 .296l3.743-2L12 9.427zM18.389 15.846 12.256 5.29A.3.3 0 0 0 12 5.143v4.285l2.639 4.723 3.75 1.992a.3.3 0 0 0 0-.297"/><path fill="currentColor" d="m18.389 16.148-3.746-2.005H9.357L5.61 16.148a.3.3 0 0 0 .109.1.3.3 0 0 0 .148.038H18.13a.3.3 0 0 0 .149-.037.3.3 0 0 0 .109-.1"/>
        </>
      ) : (
        <>
          <g clipPath="url(#BAT__a)"><path fill="#FF4724" d="M0 0h24v24H0z"/><path fill="#fff" d="M12 5.143a.3.3 0 0 0-.255.148L5.61 15.846a.3.3 0 0 0 0 .296l3.743-2L12 9.427zM18.389 15.846 12.256 5.29A.3.3 0 0 0 12 5.143v4.285l2.639 4.723 3.75 1.992a.3.3 0 0 0 0-.297"/><path fill="#fff" d="m18.389 16.148-3.746-2.005H9.357L5.61 16.148a.3.3 0 0 0 .109.1.3.3 0 0 0 .148.038H18.13a.3.3 0 0 0 .149-.037.3.3 0 0 0 .109-.1"/></g><defs><clipPath id="BAT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconBat.displayName = 'Bat';

export default IconBat;