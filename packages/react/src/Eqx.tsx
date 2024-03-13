
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEqx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6 18V6h12v1.714H7.714v8.572h6.857V18zm10.286-7.286H9V9h9v9h-1.714v-3.857H9v-1.714h7.286z"/>
        </>
      ) : (
        <>
          <path fill="url(#EQX__a)" d="M6 18V6h12v1.714H7.714v8.572h6.857V18zm10.286-7.286H9V9h9v9h-1.714v-3.857H9v-1.714h7.286z"/><defs><linearGradient id="EQX__a" x1="7.071" x2="15.964" y1="8.143" y2="16.286" gradientUnits="userSpaceOnUse"><stop stopColor="#112650"/><stop offset="1" stopColor="#38A28B"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEqx.displayName = 'Eqx';

export default IconEqx;
