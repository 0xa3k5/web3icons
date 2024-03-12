
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOlt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m8.786 5.143 2.783 1.607v3.214l-2.783 1.608-2.784-1.608V6.75zM8.786 12.429l2.783 1.607v3.214l-2.783 1.607-2.784-1.607v-3.214zm6.428-7.286 2.784 1.607v3.214l-2.784 1.608-2.783-1.607V6.75zM15.214 12.429l2.784 1.607v3.214l-2.784 1.607-2.783-1.607v-3.214z"/>
        </>
      ) : (
        <>
          <path fill="#008D9F" d="m8.786 5.143 2.783 1.607v3.214l-2.783 1.608-2.784-1.608V6.75z"/><path fill="#00F1D0" d="m8.786 12.429 2.783 1.607v3.214l-2.783 1.607-2.784-1.607v-3.214zm6.428-7.286 2.784 1.607v3.214l-2.784 1.608-2.783-1.607V6.75z"/><path fill="#008D9F" d="m15.214 12.429 2.784 1.607v3.214l-2.784 1.607-2.783-1.607v-3.214z"/>
        </>
      )}
    </BaseIcon>
));

IconOlt.displayName = 'Olt';
IconOlt.variants = 'brandedmono';

export default IconOlt;
