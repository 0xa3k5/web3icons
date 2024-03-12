
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIxt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.286 7.714h2.143v2.143H4.286zm0 3h2.143v5.572H4.286zm11.782-3h3.646l-4.349 4.268 4.35 4.304h-3.647l-4.497-4.304z"/><path fill="currentColor" d="M10.932 7.714H7.286l4.349 4.268-4.35 4.304h3.646l4.498-4.304z"/>
        </>
      ) : (
        <>
          <path fill="#245771" d="M4.286 7.714H6.43v2.143H4.286zm0 3H6.43v5.572H4.286zm11.783-3h3.646l-4.35 4.268 4.35 4.304h-3.646l-4.497-4.304z"/><path fill="#fff" d="M10.932 7.714H7.286l4.35 4.268-4.35 4.304h3.646l4.497-4.304z"/>
        </>
      )}
    </BaseIcon>
));

IconIxt.displayName = 'Ixt';
IconIxt.variants = 'brandedmono';

export default IconIxt;
