
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPdex = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18 16.502v-1.694L15.187 12H13.5zM6 7.757v1.646l2.86 3.026h1.64zm1.5-1.759h1.64L11.976 8.8l2.81-2.802H16.5L12 10.515zm0 12h1.64l2.836-2.802 2.81 2.802H16.5l-4.5-4.49zm4.5-5.141a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M18 16.502v-1.694L15.187 12H13.5zM6 7.757v1.646l2.86 3.026h1.64zm1.5-1.759h1.64L11.976 8.8l2.81-2.802H16.5L12 10.515zm0 12h1.64l2.836-2.802 2.81 2.802H16.5l-4.5-4.49z"/>
    <path fill="#E6007A" d="M12 12.857a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715"/>

        </>
      )}
    </BaseIcon>
));

IconPdex.displayName = 'Pdex';

export default IconPdex;
