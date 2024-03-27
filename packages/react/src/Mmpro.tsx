
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMmpro = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.857 9V6.857h-.428V9h-.836l-1.307 1.599v-4.17h-1.072V3h-.428v3.429h-1.072v4.17L9.407 9h-.836V6.857h-.428V9h-.857v6h.857v3.429h.428V15h.857v-3.416l1.286 1.5v3.63h1.072V21h.428v-4.286h1.072V13.09l1.285-1.5V15h.857v3.429h.43V15h.856V9z"/>

        </>
      ) : (
        <>
          
    <path fill="#3C6" d="M15.858 9V6.857h-.429V9h-.836l-1.307 1.599v-4.17h-1.071V3h-.429v3.429h-1.071v4.17L9.408 9h-.836V6.857h-.429V9h-.857v6h.857v3.429h.429V15h.857v-3.416l1.286 1.5v3.63h1.071V21h.429v-4.286h1.071V13.09l1.286-1.5V15h.857v3.429h.429V15h.857V9z"/>

        </>
      )}
    </BaseIcon>
));

IconMmpro.displayName = 'Mmpro';

export default IconMmpro;
