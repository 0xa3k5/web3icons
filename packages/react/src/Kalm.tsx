
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKalm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.571 7.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572m0 3.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.57m0 3.858a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571m0 3.429a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572M15 8.572h2.571l-4.285 4.714 4.285 5.143H15l-4.286-5.143z"/>

        </>
      ) : (
        <>
          
    <path fill="#E6403B" d="M8.572 7.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/>
    <path fill="#FCB82B" d="M8.572 11.143a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.57"/>
    <path fill="#40D27E" d="M8.572 15a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571"/>
    <path fill="#2BA5F8" d="M8.572 18.429a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/>
    <path fill="#414141" d="M15 8.572h2.572l-4.286 4.714 4.286 5.143H15l-4.285-5.143z"/>

        </>
      )}
    </BaseIcon>
));

IconKalm.displayName = 'Kalm';

export default IconKalm;
