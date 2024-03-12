
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFore = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.714 6h9.429v2.571H7.714zm0 5.571h8.572v2.572h-6v4.286H7.714z"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M7.714 6h9.428v2.571H7.714zm0 5.571h8.571v2.572h-6v4.286H7.714z"/>
        </>
      )}
    </BaseIcon>
));

IconFore.displayName = 'Fore';
IconFore.variants = 'brandedmono';

export default IconFore;
