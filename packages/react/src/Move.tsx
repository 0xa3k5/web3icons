
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMove = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.143 12h2.571v5.143h-2.57zm2.571 0h3v5.143h2.572V9.428H7.714zm5.572-5.143v2.571h2.571v7.715h2.572V6.857z"/>

        </>
      ) : (
        <>
          
    <path fill="#6FE9B1" d="M5.143 12h2.571v5.143H5.143zm2.571 0h3v5.143h2.571V9.428H7.714zm5.571-5.143v2.571h2.572v7.715h2.571V6.857z"/>

        </>
      )}
    </BaseIcon>
));

IconMove.displayName = 'Move';

export default IconMove;
