
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAtri = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.429 5.572h1.285v2.571c0 3.428-.81 8.061-6.428 9v-1.714c1.285-.215 5.13-1.715 5.13-7.286zm1.714 0h1.714v11.571h-1.714zm3.428 0h-1.285v2.571c0 3.428.81 8.061 6.428 9v-1.714c-1.285-.215-5.13-1.715-5.13-7.286z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ATRI__a)"><path fill="#E01920" d="M0 0h24v24H0z"/><path fill="#fff" d="M9.429 5.572h1.285v2.571c0 3.428-.81 8.061-6.428 9v-1.714c1.285-.215 5.13-1.715 5.13-7.286zm1.714 0h1.714v11.571h-1.714zm3.428 0h-1.285v2.571c0 3.428.81 8.061 6.428 9v-1.714c-1.285-.215-5.13-1.715-5.13-7.286z"/></g><defs><clipPath id="ATRI__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAtri.displayName = 'Atri';

export default IconAtri;
