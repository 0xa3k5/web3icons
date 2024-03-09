
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAnc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.24 16.858c-1.05-.588-1.41-1.89-.803-2.908l4.684-7.73c.606-1.017 1.874-1.38 2.924-.792s1.41 1.89.803 2.908L9.24 16.078c-.606 1.018-1.949 1.367-2.998.78"/><path fill="currentColor" d="M17.759 16.858c1.05-.588 1.41-1.89.804-2.908l-4.687-7.722c-.607-1.018-1.871-1.387-2.921-.8-1.05.588-1.41 1.89-.804 2.908l4.61 7.742c.606 1.018 1.948 1.367 2.998.78"/><path fill="currentColor" d="M13.731 8.549a2.143 2.143 0 1 0-3.463 0L12 11.444z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ANC__a)"><path fill="url(#ANC__b)" d="M0 0h24v24H0z"/><path fill="#43B543" d="M6.24 16.858c-1.05-.588-1.41-1.89-.803-2.908l4.684-7.73c.606-1.017 1.874-1.38 2.924-.792s1.41 1.89.803 2.908L9.24 16.078c-.606 1.018-1.949 1.367-2.998.78"/><path fill="#306A30" d="M17.759 16.858c1.05-.588 1.41-1.89.804-2.908l-4.687-7.722c-.607-1.018-1.871-1.387-2.921-.8-1.05.588-1.41 1.89-.804 2.908l4.61 7.742c.606 1.018 1.948 1.367 2.998.78"/><path fill="#5FCE5F" d="M13.731 8.549a2.143 2.143 0 1 0-3.463 0L12 11.444z" fillRule="evenodd" clipRule="evenodd"/></g><defs><linearGradient id="ANC__b" x1="4.465" x2="29.206" y1="4.162" y2="32.579" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="ANC__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAnc.displayName = 'Anc';

export default IconAnc;
