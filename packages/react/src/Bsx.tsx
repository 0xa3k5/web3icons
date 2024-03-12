
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBsx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M9.857 12c0-1.226.296-3.763 2.143-6 1.847 2.237 2.143 4.774 2.143 6s-.296 3.763-2.143 6a9.6 9.6 0 0 1-2.143-6"/>
        </>
      ) : (
        <>
          <path fill="#4EFFAF" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M9.857 12c0-1.226.296-3.763 2.143-6 1.847 2.237 2.143 4.774 2.143 6s-.296 3.763-2.143 6a9.6 9.6 0 0 1-2.143-6"/>
        </>
      )}
    </BaseIcon>
));

IconBsx.displayName = 'Bsx';
IconBsx.variants = 'brandedmono';

export default IconBsx;
