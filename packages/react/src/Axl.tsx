
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAxl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12.797 10.916 4.188-4.183-1.586-1.59L12 8.537 8.61 5.143 7.024 6.729l4.183 4.187a1.12 1.12 0 0 0 1.59 0m6.06 4.474-3.39-3.394 3.386-3.39-1.586-1.586-4.182 4.183a1.12 1.12 0 0 0 0 1.586l4.182 4.187zM12 15.463l3.386 3.394 1.59-1.586-4.183-4.187a1.12 1.12 0 0 0-1.59 0l-4.187 4.183 1.586 1.59zm-1.084-2.666a1.12 1.12 0 0 0 0-1.586L6.733 7.024 5.143 8.61l3.394 3.394-3.394 3.39L6.73 16.98z"/>
        </>
      ) : (
        <>
          <path fill="#000" d="m12.797 10.916 4.187-4.183-1.586-1.59L12 8.537 8.61 5.143 7.024 6.729l4.183 4.187a1.117 1.117 0 0 0 1.59 0m6.06 4.474-3.39-3.394 3.386-3.39-1.586-1.586-4.183 4.183a1.12 1.12 0 0 0 0 1.586l4.183 4.187zM12 15.463l3.385 3.394 1.59-1.586-4.182-4.187a1.12 1.12 0 0 0-1.59 0l-4.188 4.183 1.586 1.59zm-1.085-2.666a1.117 1.117 0 0 0 0-1.586L6.733 7.024 5.143 8.61l3.394 3.394-3.394 3.39 1.585 1.586z"/>
        </>
      )}
    </BaseIcon>
));

IconAxl.displayName = 'Axl';
IconAxl.variants = 'brandedmono';

export default IconAxl;
