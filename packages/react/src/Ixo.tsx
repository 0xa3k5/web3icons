
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIxo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.571 8.571a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571M6.857 9H4.286v6.857h2.571zm.429 1.766V9h1.693l1.735 1.723L12.428 9h1.715v1.719l-1.706 1.718 1.706 1.697v1.723h-1.736l-1.688-1.68-1.668 1.68H7.286V14.17l1.701-1.71zM21 12.429a3.428 3.428 0 1 1-6.857 0 3.428 3.428 0 0 1 6.857 0m-2.143 0a1.286 1.286 0 1 1-2.571 0 1.286 1.286 0 0 1 2.571 0" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#00D2FF" d="M5.572 8.571a1.286 1.286 0 1 0 0-2.57 1.286 1.286 0 0 0 0 2.57M6.858 9H4.286v6.857h2.572zm.428 1.766V9H8.98l1.736 1.723L12.429 9h1.714v1.719l-1.705 1.718 1.705 1.697v1.723h-1.735l-1.689-1.68-1.667 1.68H7.286V14.17l1.702-1.71zM21 12.429a3.428 3.428 0 1 1-6.856 0 3.428 3.428 0 0 1 6.856 0m-2.142 0a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconIxo.displayName = 'Ixo';

export default IconIxo;
