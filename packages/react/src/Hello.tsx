
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHello = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.143 5.82a7.282 7.282 0 0 0 0 12.36zm2.571 13.354c.85.152 1.721.152 2.572 0v-5.4l-2.572.33zm5.143-.994a7.282 7.282 0 0 0 0-12.36zM13.286 4.826v6.381l-2.572.364V4.826a7.3 7.3 0 0 1 2.572 0"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M8.143 5.82a7.282 7.282 0 0 0 0 12.36zm2.571 13.354c.85.152 1.721.152 2.572 0v-5.4l-2.572.33zm5.143-.994a7.282 7.282 0 0 0 0-12.36zM13.286 4.826v6.381l-2.572.364V4.826a7.3 7.3 0 0 1 2.572 0"/>
        </>
      )}
    </BaseIcon>
));

IconHello.displayName = 'Hello';
IconHello.variants = 'brandedmono';

export default IconHello;
