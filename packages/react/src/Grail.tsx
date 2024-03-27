
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGrail = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.286 19.714v-5.571c1.346.146 2.164.694 2.164.694l.857-.964c-1.405-1.003-3.463-1.016-3.463-1.016l-.377-3.814a.836.836 0 1 0-.921 0l-.403 3.814s-2.027.009-3.437 1.016l.857.964s.806-.548 2.151-.694v5.571C5.451 15.82 5.13 10.161 5.143 8.284c0-.39.236-.75.591-.904A16 16 0 0 1 12 6c2.816 0 5.216.913 6.266 1.38a.99.99 0 0 1 .591.9c.013 1.886-.321 7.543-5.571 11.434"/>

        </>
      ) : (
        <>
          
    <path fill="#FFAF1D" d="M13.286 19.714v-5.571c1.346.146 2.164.694 2.164.694l.857-.964c-1.405-1.003-3.463-1.016-3.463-1.016l-.377-3.814a.836.836 0 1 0-.921 0l-.403 3.814s-2.027.009-3.437 1.016l.857.964s.806-.548 2.151-.694v5.571C5.451 15.82 5.13 10.161 5.143 8.284c0-.39.236-.75.591-.904A16 16 0 0 1 12 6c2.816 0 5.216.913 6.266 1.38a.99.99 0 0 1 .591.9c.013 1.886-.321 7.543-5.571 11.434"/>

        </>
      )}
    </BaseIcon>
));

IconGrail.displayName = 'Grail';

export default IconGrail;
