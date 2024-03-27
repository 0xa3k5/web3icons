
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPol = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.286 7.636V4.973l2.696-1.544 7.59 4.364v2.651L14.861 12zm0 8.523v-2.61l4.648-2.62 2.929 1.656 2.708-1.525v2.335l-7.589 4.277zm2.696 2.144-2.696-1.481v2.268l2.696 1.482 2.447-1.482v-2.137z"/>

        </>
      ) : (
        <>
          
    <path fill="#00D7D3" d="M7.286 7.636V4.973l2.697-1.544 7.589 4.364v2.651L14.863 12zm0 8.523v-2.61l4.649-2.62 2.928 1.656 2.709-1.525v2.335l-7.59 4.277zm2.697 2.144-2.697-1.481v2.268l2.697 1.482 2.446-1.482v-2.137z"/>

        </>
      )}
    </BaseIcon>
));

IconPol.displayName = 'Pol';

export default IconPol;
