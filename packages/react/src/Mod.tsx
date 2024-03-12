
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMod = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.925 10.856 5.218 5.305-.001-10.59z"/><path fill="currentColor" d="m6.857 19.286 6.708-6.825L7.09 5.884l-.233-.236z"/>
        </>
      ) : (
        <>
          <path fill="#4283EB" d="m11.926 10.856 5.217 5.305V5.571z"/><path fill="#253750" d="m6.857 19.286 6.708-6.825-6.474-6.577-.234-.236z"/>
        </>
      )}
    </BaseIcon>
));

IconMod.displayName = 'Mod';
IconMod.variants = 'brandedmono';

export default IconMod;
