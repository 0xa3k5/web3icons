
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLtx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.857 5.143 12 10.286l-1.623 1.802-3.52-3.516z"/><path fill="currentColor" d="M17.143 5.143v3.429L6.857 18.842v-3.413z"/><path fill="currentColor" d="M17.143 15.429v3.428L12 13.715v-3.43z"/>
        </>
      ) : (
        <>
          <path fill="#FC0" d="M6.857 5.143 12 10.286l-1.622 1.802-3.52-3.516z"/><path fill="#000" d="M17.143 5.143v3.429L6.857 18.842v-3.413z"/><path fill="#FC0" d="M17.143 15.429v3.428L12 13.715v-3.43z"/>
        </>
      )}
    </BaseIcon>
));

IconLtx.displayName = 'Ltx';

export default IconLtx;
