
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMzr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18 18.428V5.571l-6 4.886-6-4.886v12.857l3-2.502v-4.539l3 2.593 3-2.593v4.543zm-6-5.845L7.989 9.206v6.111l-.93.699V7.783L12 11.824zm0 0 3.999-3.377v6.111l.942.699V7.783L12 11.824zm-1.714 3.463 1.718 1.611 1.71-1.611V14.06l-1.71 1.629-1.718-1.633z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M18 18.428V5.571l-6 4.886-6-4.886v12.857l3-2.502v-4.539l3 2.593 3-2.593v4.543zm-6-5.845L7.989 9.206v6.111l-.93.699V7.783L12 11.824zm0 0 3.999-3.377v6.111l.942.699V7.783L12 11.824zm-1.714 3.463 1.718 1.611 1.71-1.611V14.06l-1.71 1.629-1.718-1.633z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconMzr.displayName = 'Mzr';
IconMzr.variants = 'brandedmono';

export default IconMzr;
