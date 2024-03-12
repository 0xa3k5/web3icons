
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFlow = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18 8.143h-3.086c-.664 0-1.2.673-1.2 1.32v.394h-3.428v-.394c0-2.383 1.988-4.32 4.444-4.32H18zm-7.714 6.214c0 .673-.399 1.226-1.072 1.226-.857 0-1.226-.553-1.226-1.226s.553-1.071 1.226-1.071h1.072zm3.428-1.071v.874c0 2.486-2.014 4.697-4.5 4.697a4.505 4.505 0 0 1 0-9h1.072v3.429zm0 0V9.857h3.429v3.429z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#00EF8B" d="M18 8.143h-3.086c-.664 0-1.2.673-1.2 1.32v.394h-3.428v-.394c0-2.383 1.988-4.32 4.444-4.32H18zm-7.714 6.214c0 .673-.399 1.226-1.072 1.226-.857 0-1.226-.553-1.226-1.226s.553-1.071 1.226-1.071h1.072zm3.428-1.071v.874c0 2.486-2.014 4.697-4.5 4.697a4.505 4.505 0 0 1 0-9h1.072v3.429zm0 0V9.857h3.429v3.429z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconFlow.displayName = 'Flow';
IconFlow.variants = 'brandedmono';

export default IconFlow;
