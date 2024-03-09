
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15 19.286h-1.937L12 6.947l-1.063 12.339H9l1.757-14.572h2.49z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ATH__a)"><path fill="#EA6E25" d="M0 0h24v24H0z"/><path fill="#E6E6E6" d="M15 19.286h-1.937L12 6.947l-1.063 12.339H9l1.757-14.572h2.49z"/></g><defs><clipPath id="ATH__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAth.displayName = 'Ath';

export default IconAth;
