
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArv = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m14.473 14.927-1.264-2.07h2.434l1.903 3.176a6.858 6.858 0 1 0-11.092 0L12 6.428 15.214 12H12.78L12 10.59l-1.299 2.267h1.813L13.78 15H9.467L7.96 17.54A6.83 6.83 0 0 0 12 18.857a6.83 6.83 0 0 0 3.999-1.286z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ARV__a)"><path fill="#739574" d="M0 0h24v24H0z"/><path fill="#fff" d="m14.473 14.927-1.264-2.07h2.434l1.903 3.176a6.858 6.858 0 1 0-11.092 0L12 6.428 15.214 12H12.78L12 10.59l-1.299 2.267h1.813L13.78 15H9.467L7.96 17.54A6.83 6.83 0 0 0 12 18.857a6.83 6.83 0 0 0 3.999-1.286z"/></g><defs><clipPath id="ARV__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconArv.displayName = 'Arv';

export default IconArv;
