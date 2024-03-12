
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconExd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.286 5.572h3.428v12.857H7.286zM16.714 5.572h-5.571l5.571 5.142zm0 12.857v-5.143l-5.571 5.143z"/>
        </>
      ) : (
        <>
          <path fill="#EC793E" d="M7.286 5.572h3.429v12.857H7.286z"/><path fill="#0D1122" d="M16.715 5.572h-5.572l5.572 5.142zm0 12.857v-5.143l-5.572 5.143z"/>
        </>
      )}
    </BaseIcon>
));

IconExd.displayName = 'Exd';
IconExd.variants = 'brandedmono';

export default IconExd;
