
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLrc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.143 5.726V17.57l-5.156-4.207zM11.143 17.572l4.866-4.207-1.415-2.222h6.881z"/>
        </>
      ) : (
        <>
          <path fill="#1F63FF" d="M11.143 5.726V17.57l-5.157-4.207zM11.143 17.572l4.865-4.207-1.415-2.222h6.882z"/>
        </>
      )}
    </BaseIcon>
));

IconLrc.displayName = 'Lrc';

export default IconLrc;
