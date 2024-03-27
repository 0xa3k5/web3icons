
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconReq = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.122 6A1.694 1.694 0 0 0 6.43 7.694v9.663a1.5 1.5 0 1 0 3 0V8.571h6L18 6z"/>
    <path fill="currentColor" d="M18 9.789V6.01l-6.496 6.412a1.18 1.18 0 0 0-.01 1.669l4.256 4.308a1.364 1.364 0 0 0 1.944-1.914l-2.93-2.984a.35.35 0 0 1 .002-.496z"/>

        </>
      ) : (
        <>
          
    <path fill="#69E2A5" d="M8.122 6A1.694 1.694 0 0 0 6.43 7.694v9.663a1.5 1.5 0 1 0 3 0V8.571h6L18 6z"/>
    <path fill="#3D8A65" d="M18 9.789V6.01l-6.496 6.412a1.18 1.18 0 0 0-.01 1.669l4.256 4.308a1.364 1.364 0 0 0 1.944-1.914l-2.93-2.984a.35.35 0 0 1 .002-.496z"/>

        </>
      )}
    </BaseIcon>
));

IconReq.displayName = 'Req';

export default IconReq;
