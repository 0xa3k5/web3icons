
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconJst = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.714 7.287a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0m0 11.142a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0m-8.143-4.715h12.857v2.143H5.571z"/><path fill="currentColor" d="M5.143 6c.163 3.577 3.17 6.429 6.857 6.429S18.695 9.577 18.857 6H16.7c-.22 2.357-2.24 4.203-4.699 4.203-2.46 0-4.48-1.846-4.7-4.203z"/>
        </>
      ) : (
        <>
          <path fill="#B41514" d="M13.714 7.287a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0m0 11.142a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0m-8.143-4.715h12.857v2.143H5.571z"/><path fill="#B41514" d="M5.143 6c.162 3.577 3.17 6.429 6.857 6.429 3.686 0 6.694-2.852 6.857-6.429H16.7c-.22 2.357-2.24 4.203-4.7 4.203S7.52 8.357 7.302 6z"/>
        </>
      )}
    </BaseIcon>
));

IconJst.displayName = 'Jst';
IconJst.variants = 'brandedmono';

export default IconJst;
