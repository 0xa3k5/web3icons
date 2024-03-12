
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNuls = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.714 14.867 12 16.65v3.874l-4.714-2.271V8.27c0-.15.047-.291.154-.386l.557-.5a.51.51 0 0 1 .754.076l4.295 6.116 2.383 1.569V6.728l-2.143-1.14v5.285L12 9.278V3.471l4.714 2.37v9.943l-.943.956L12.3 14.7 8.57 9.403v8.057l2.143 1.041z"/>
        </>
      ) : (
        <>
          <path fill="#00E789" d="M10.715 14.867 12 16.65v3.874l-4.714-2.271V8.27c0-.15.047-.291.154-.386l.558-.5a.51.51 0 0 1 .754.076l4.294 6.116 2.383 1.569V6.728l-2.143-1.14v5.285L12 9.278V3.471l4.715 2.37v9.943l-.943.956L12.3 14.7 8.572 9.403v8.057l2.143 1.041z"/>
        </>
      )}
    </BaseIcon>
));

IconNuls.displayName = 'Nuls';
IconNuls.variants = 'brandedmono';

export default IconNuls;
