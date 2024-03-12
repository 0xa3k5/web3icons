
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOkt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.571 5.571h4.286v4.286H5.571zm8.572 4.286H9.857v4.286H5.571v4.285h4.286v-4.285h4.286v4.285h4.285v-4.285h-4.285zm0 0V5.571h4.285v4.286z"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M5.571 5.571h4.286v4.286H5.571zm8.572 4.286H9.857v4.286H5.571v4.285h4.286v-4.285h4.286v4.285h4.285v-4.285h-4.285zm0 0V5.571h4.285v4.286z"/>
        </>
      )}
    </BaseIcon>
));

IconOkt.displayName = 'Okt';
IconOkt.variants = 'brandedmono';

export default IconOkt;
