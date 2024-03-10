
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const Icon1art = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.27 5.769c.785-.497 1.852.004 1.873.865V17.34c0 .6-.626 1.089-1.286 1.089-.651 0-1.272-.476-1.285-1.072V9.112s-1.745 1.084-2.585 1.517a.76.76 0 0 1-.33.09 1.3 1.3 0 0 1-.45-.082c-.493-.188-.943-.664-.921-1.208.013-.317.154-.617.467-.823l.017-.013 4.5-2.829z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#1ART__a)"><path fill="url(#1ART__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M12.27 5.769c.785-.497 1.852.004 1.873.865V17.34c0 .6-.626 1.089-1.286 1.089-.651 0-1.272-.476-1.285-1.072V9.112s-1.745 1.084-2.585 1.517a.76.76 0 0 1-.33.09 1.3 1.3 0 0 1-.45-.082c-.493-.188-.943-.664-.921-1.208.013-.317.154-.617.467-.823l.017-.013 4.5-2.829z"/></g><defs><linearGradient id="1ART__b" x1="21.214" x2="1.929" y1="5.357" y2="17.786" gradientUnits="userSpaceOnUse"><stop stopColor="#836DF7"/><stop offset=".28" stopColor="#2E8ACA"/><stop offset=".5" stopColor="#4978D6"/><stop offset="1" stopColor="#A672DC"/></linearGradient><clipPath id="1ART__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

Icon1art.displayName = '1art';

export default Icon1art;