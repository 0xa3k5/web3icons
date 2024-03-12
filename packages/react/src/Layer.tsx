
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLayer = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6 6.429h12V9H6zM6 10.714h12v2.572H6zM6 15h12v2.572H6z"/>
        </>
      ) : (
        <>
          <path fill="#fff" d="M6 6.429h12V9H6z"/><path fill="#FF47A2" d="M6 10.714h12v2.572H6z"/><path fill="#fff" d="M6 15h12v2.572H6z"/>
        </>
      )}
    </BaseIcon>
));

IconLayer.displayName = 'Layer';
IconLayer.variants = 'brandedmono';

export default IconLayer;
