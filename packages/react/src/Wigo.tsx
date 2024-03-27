
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWigo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18 12h-1.286V8.049a10 10 0 0 1-10.14 2.725L6 10.603l.343-1.153.578.171c3.215.96 6.729.099 9.026-2.335H12V6h6zM6 12h1.286v3.951a10 10 0 0 1 10.14-2.725l.574.171-.343 1.153-.578-.171a8.9 8.9 0 0 0-9.026 2.335H12V18H6z"/>

        </>
      ) : (
        <>
          
    <path fill="#070BF0" d="M18 12h-1.286V8.049a10 10 0 0 1-10.14 2.725L6 10.603l.343-1.153.578.171c3.215.96 6.729.099 9.026-2.335H12V6h6zM6 12h1.286v3.951a10 10 0 0 1 10.14-2.725l.574.171-.343 1.153-.578-.171a8.9 8.9 0 0 0-9.026 2.335H12V18H6z"/>

        </>
      )}
    </BaseIcon>
));

IconWigo.displayName = 'Wigo';

export default IconWigo;
