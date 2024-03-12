
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBlock = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.545 6h7.098l3.643 6-3.643 6H8.482l3.58-6zm3.767 2.143L14.637 12l-2.325 3.857h2.082L16.704 12 14.38 8.143h-2.074z"/><path fill="currentColor" d="M9.3 8.687 7.29 12l1.998 3.287L8.01 17.42 4.714 12l3.324-5.473z"/>
        </>
      ) : (
        <>
          <path fill="#2D338A" d="M8.544 6h7.098l3.643 6-3.643 6h-7.16l3.58-6zm3.768 2.143L14.636 12l-2.324 3.857h2.082L16.704 12l-2.325-3.857h-2.074z"/><path fill="#2D338A" d="M9.3 8.687 7.288 12l1.998 3.287L8.01 17.42 4.714 12l3.323-5.473z"/>
        </>
      )}
    </BaseIcon>
));

IconBlock.displayName = 'Block';
IconBlock.variants = 'brandedmono';

export default IconBlock;
