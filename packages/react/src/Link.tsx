
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLink = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 4.796 6 3.594v7.274l-6.857 4.063v-1.024l-5.13-3.066L6 8.433zm.007 12.427 4.279-2.534V9.363L12 6.798 7.714 9.396v5.267z"/>
        </>
      ) : (
        <>
          <path fill="#2E61DE" d="m12 4.796 6 3.594v7.274l-6.857 4.063v-1.024l-5.13-3.066L6 8.433zm.007 12.427 4.279-2.534V9.363L12 6.798 7.714 9.396v5.267z"/>
        </>
      )}
    </BaseIcon>
));

IconLink.displayName = 'Link';
IconLink.variants = 'brandedmono';

export default IconLink;
