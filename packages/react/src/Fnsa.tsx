
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFnsa = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M17.143 6.857h-5.019c-2.957 0-5.267 2.255-5.267 5.165v6.835H5.143v-6.835c0-3.802 3.129-6.879 6.982-6.879h6.732v6.836c0 3.801-3.128 6.878-6.981 6.878H8.143v-7.144a4.294 4.294 0 0 1 4.226-3.57h3.06v1.714H12.57c-1.29 0-2.203.536-2.571 1.715h5.43v1.714H9.857v3.857h2.019c2.957 0 5.267-2.254 5.267-5.164z"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M17.143 6.857h-5.019c-2.957 0-5.267 2.255-5.267 5.165v6.835H5.143v-6.835c0-3.802 3.128-6.879 6.981-6.879h6.733v6.836c0 3.801-3.129 6.878-6.982 6.878H8.143v-7.144a4.294 4.294 0 0 1 4.225-3.57h3.06v1.714H12.57c-1.29 0-2.203.536-2.572 1.715h5.43v1.714H9.857v3.857h2.018c2.958 0 5.268-2.254 5.268-5.164z"/>
        </>
      )}
    </BaseIcon>
));

IconFnsa.displayName = 'Fnsa';
IconFnsa.variants = 'brandedmono';

export default IconFnsa;
