
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAdx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.76 6.714 12 10l3.159-3.286 1.984 1.972L13.91 12l3.233 3.286-1.984 2L12 14l-3.24 3.285-1.903-1.942 3.203-3.357-3.203-3.308L8.76 6.707zm.257-.264 2.969-3.022 2.967 3.022-1.557 1.614-1.41-1.507-1.404 1.507zm0 11.1 1.565-1.615 1.403 1.508 1.41-1.508 1.558 1.615-2.967 3.021z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ADX__a)"><path fill="#1B75BC" d="M0 0h24v24H0z"/><path fill="#fff" d="M8.76 6.714 12 10l3.159-3.286 1.984 1.972L13.91 12l3.233 3.286-1.984 2L12 14l-3.24 3.285-1.903-1.942 3.203-3.357-3.203-3.308L8.76 6.707zm.257-.264 2.969-3.022 2.967 3.022-1.557 1.614-1.41-1.507-1.404 1.507zm0 11.1 1.565-1.615 1.403 1.508 1.41-1.508 1.558 1.615-2.967 3.021z"/></g><defs><clipPath id="ADX__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAdx.displayName = 'Adx';

export default IconAdx;
