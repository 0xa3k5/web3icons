
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNcr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.285 15.857h1.5l-4.067-7.285H9.214z"/>
    <path fill="currentColor" d="M17.151 6.848A7.286 7.286 0 1 0 6.848 17.152 7.286 7.286 0 0 0 17.15 6.848m-.544.052A6.94 6.94 0 0 0 12 5.143 6.94 6.94 0 0 0 7.393 6.9l.321.322a6.394 6.394 0 0 1 8.58-.009zm1.808 4.672a6.4 6.4 0 0 0-1.598-3.832l.283-.313a7.24 7.24 0 0 1 1.757 4.145zM16.8 16.273A6.4 6.4 0 0 0 18.428 12h.429c0 1.629-.669 3.373-1.757 4.573zm-9.095.514A6.4 6.4 0 0 0 12 18.43c1.65 0 3.154-.622 4.294-1.642l.313.313A6.88 6.88 0 0 1 12 18.857 6.94 6.94 0 0 1 7.393 17.1zM5.571 12c0 1.633.609 3.129 1.612 4.26l-.283.313A7.3 7.3 0 0 1 5.143 12zm1.65-4.286a6.4 6.4 0 0 0-1.637 3.858h-.441c.107-1.547.771-3.086 1.757-4.179zm1.35 8.572V8.143h2.392L15 15.504v-7.36h.428v8.142h-2.391L9 8.925v7.36z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#NCR__a)" d="M13.285 15.857h1.5l-4.067-7.285H9.214z"/>
    <path fill="url(#NCR__b)" d="M17.151 6.848A7.286 7.286 0 1 0 6.848 17.152 7.286 7.286 0 0 0 17.15 6.848m-.544.052A6.94 6.94 0 0 0 12 5.143 6.94 6.94 0 0 0 7.393 6.9l.321.322a6.394 6.394 0 0 1 8.58-.009zm1.808 4.672a6.4 6.4 0 0 0-1.598-3.832l.283-.313a7.24 7.24 0 0 1 1.757 4.145zM16.8 16.273A6.4 6.4 0 0 0 18.428 12h.429c0 1.629-.669 3.373-1.757 4.573zm-9.095.514A6.4 6.4 0 0 0 12 18.43c1.65 0 3.154-.622 4.294-1.642l.313.313A6.88 6.88 0 0 1 12 18.857 6.94 6.94 0 0 1 7.393 17.1zM5.571 12c0 1.633.609 3.129 1.612 4.26l-.283.313A7.3 7.3 0 0 1 5.143 12zm1.65-4.286a6.4 6.4 0 0 0-1.637 3.858h-.441c.107-1.547.771-3.086 1.757-4.179zm1.35 8.572V8.143h2.392L15 15.504v-7.36h.428v8.142h-2.391L9 8.925v7.36z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="NCR__a" x1="17.357" x2="6.642" y1="6.643" y2="17.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58F05"/>
            <stop offset=".53" stopColor="#F4B86D"/>
            <stop offset="1" stopColor="#EA911D"/>
        </linearGradient>
        <linearGradient id="NCR__b" x1="17.357" x2="6.642" y1="6.643" y2="17.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58F05"/>
            <stop offset=".53" stopColor="#F4B86D"/>
            <stop offset="1" stopColor="#EA911D"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconNcr.displayName = 'Ncr';

export default IconNcr;
