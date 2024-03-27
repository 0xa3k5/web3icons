
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconShopx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.853 11.709a5.142 5.142 0 0 1-6.557-6.557c-.103-.009-.197-.009-.296-.009a6.857 6.857 0 0 0-6.626 8.636 3.454 3.454 0 0 1 4.655 4.791 6.857 6.857 0 0 0 8.828-6.857z"/>

        </>
      ) : (
        <>
          
    <path fill="#061A25" d="M18.853 11.709a5.142 5.142 0 0 1-6.557-6.557c-.103-.009-.197-.009-.296-.009a6.857 6.857 0 0 0-6.626 8.636 3.454 3.454 0 0 1 4.655 4.791 6.857 6.857 0 0 0 8.828-6.857z"/>

        </>
      )}
    </BaseIcon>
));

IconShopx.displayName = 'Shopx';

export default IconShopx;
