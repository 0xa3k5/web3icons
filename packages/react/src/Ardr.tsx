
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArdr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.918 12.76 1.214 1.572L9.6 16.714zM12 5.142l1.872 3.043-4.992 8.528H5.143zm0 6.698 2.496-1.824 4.361 6.697h-3.113z"/>
        </>
      ) : (
        <>
          <path fill="#3C87C7" d="m11.917 12.76 1.214 1.572L9.6 16.714zM12 5.142l1.872 3.043-4.992 8.528H5.143zm0 6.698 2.496-1.824 4.36 6.697h-3.112z"/>
        </>
      )}
    </BaseIcon>
));

IconArdr.displayName = 'Ardr';
IconArdr.variants = 'brandedmono';

export default IconArdr;
