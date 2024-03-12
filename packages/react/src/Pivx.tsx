
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPivx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.714 7.286H8.571V6h5.143a3.857 3.857 0 0 1 0 7.714H9.857v5.143H8.571V12.43h5.143a2.571 2.571 0 1 0 0-5.143"/><path fill="currentColor" d="M12.857 10.286H8.571V9h4.286z"/>
        </>
      ) : (
        <>
          <path fill="#5E4778" d="M13.714 7.286H8.571V6h5.143a3.857 3.857 0 0 1 0 7.714H9.857v5.143H8.571V12.43h5.143a2.571 2.571 0 1 0 0-5.143"/><path fill="#5E4778" d="M12.857 10.286H8.571V9h4.286z"/>
        </>
      )}
    </BaseIcon>
));

IconPivx.displayName = 'Pivx';
IconPivx.variants = 'brandedmono';

export default IconPivx;
