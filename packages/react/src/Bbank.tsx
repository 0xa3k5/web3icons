
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBbank = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.857 5.572h1.286v8.571H6.857z"/><path fill="currentColor" d="M6.857 5.572h1.286v3s-.215-1.929-1.286-3M18 14.143a5.571 5.571 0 1 1-9.857-3.557v3.557a4.285 4.285 0 1 0 1.285-3.06V9.446A5.572 5.572 0 0 1 18 14.143"/><path fill="currentColor" d="M18 14.143c0-3.626-4.393-5.254-7.354-3.9a4.3 4.3 0 0 0-1.218.844V9.45A5.572 5.572 0 0 1 18 14.143"/><path fill="currentColor" d="m11.143 10.714-1.286.643v3.215a2.571 2.571 0 1 0 1.286-2.229zm0 3.858a1.286 1.286 0 1 0 2.571 0 1.286 1.286 0 0 0-2.571 0" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m9.857 11.357 1.286-.643v1.629a2.56 2.56 0 0 1 3.372.729c-.822 0-1.984-.043-2.73.385-1.268.733-1.44 2.623-1.44 2.623a2.56 2.56 0 0 1-.488-1.508z"/>
        </>
      ) : (
        <>
          <path fill="#F26122" d="M6.857 5.572h1.286v8.571H6.857z"/><path fill="#F6851F" d="M6.857 5.572h1.286v3s-.214-1.929-1.286-3"/><path fill="#F26122" d="M18 14.143a5.571 5.571 0 1 1-9.857-3.557v3.557a4.285 4.285 0 1 0 1.286-3.06V9.446A5.571 5.571 0 0 1 18 14.143"/><path fill="#F6851F" d="M18 14.143c0-3.626-4.393-5.254-7.354-3.9a4.3 4.3 0 0 0-1.217.844V9.45A5.571 5.571 0 0 1 18 14.143"/><path fill="#F6851F" d="m11.143 10.714-1.286.643v3.215a2.571 2.571 0 1 0 1.286-2.229zm0 3.858a1.286 1.286 0 1 0 2.572 0 1.286 1.286 0 0 0-2.572 0" fillRule="evenodd" clipRule="evenodd"/><path fill="#F26122" d="m9.857 11.357 1.286-.643v1.629a2.56 2.56 0 0 1 3.373.729c-.823 0-1.984-.043-2.73.385-1.269.733-1.44 2.623-1.44 2.623a2.56 2.56 0 0 1-.489-1.508z"/>
        </>
      )}
    </BaseIcon>
));

IconBbank.displayName = 'Bbank';

export default IconBbank;
