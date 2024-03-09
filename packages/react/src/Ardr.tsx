
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArdr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.918 12.76 1.213 1.572L9.6 16.714zM12 5.142l1.872 3.043-4.992 8.528H5.143zm0 6.698 2.496-1.824 4.361 6.697h-3.113z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ARDR__a)"><path fill="#3C87C7" d="M0 0h24v24H0z"/><path fill="#fff" d="m11.918 12.76 1.213 1.572L9.6 16.714zM12 5.142l1.872 3.043-4.992 8.528H5.143zm0 6.698 2.496-1.824 4.361 6.697h-3.113z"/></g><defs><clipPath id="ARDR__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconArdr.displayName = 'Ardr';

export default IconArdr;
