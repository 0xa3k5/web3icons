
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLunr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.566 15.857a.125.125 0 0 1-.12-.154c.128-.497.197-1.02.197-1.56 0-3.549-2.974-6.429-6.643-6.429s-6.643 2.88-6.643 6.429c0 .54.069 1.063.197 1.56a.125.125 0 0 1-.12.154.12.12 0 0 1-.107-.073 7.286 7.286 0 1 1 13.346 0 .12.12 0 0 1-.107.073M12 18.43a3.857 3.857 0 1 0 0-7.715 3.857 3.857 0 0 0 0 7.715"/>
        </>
      ) : (
        <>
          <path fill="url(#LUNR__a)" d="M18.565 15.857a.125.125 0 0 1-.12-.154c.129-.497.197-1.02.197-1.56 0-3.549-2.974-6.429-6.642-6.429s-6.643 2.88-6.643 6.429c0 .54.068 1.063.197 1.56a.125.125 0 0 1-.12.154.12.12 0 0 1-.107-.073 7.286 7.286 0 1 1 13.345 0 .12.12 0 0 1-.107.073M12 18.43a3.857 3.857 0 1 0 0-7.714 3.857 3.857 0 0 0 0 7.714"/><defs><linearGradient id="LUNR__a" x1="9.874" x2="9.874" y1="5.571" y2="9.63" gradientUnits="userSpaceOnUse"><stop stopColor="#07EDFD"/><stop offset="1" stopColor="#21FA90"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLunr.displayName = 'Lunr';

export default IconLunr;
