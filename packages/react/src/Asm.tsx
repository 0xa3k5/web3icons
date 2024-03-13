
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAsm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.82 5.228a1.13 1.13 0 0 1 .643 1.505l-1.821 4.41h4.65c.484 0 .934.411 1.118.84l1.929 4.427a1.13 1.13 0 0 1-.643 1.5 1.213 1.213 0 0 1-1.565-.617l-1.637-4.007H9.643l-1.77 4.007c-.257.587-.956.861-1.564.617a1.13 1.13 0 0 1-.643-1.5l4.598-10.56c.253-.587.952-.862 1.56-.617z"/><path fill="currentColor" d="M13.929 10.714a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        </>
      ) : (
        <>
          <path fill="#fff" d="M11.82 5.228a1.13 1.13 0 0 1 .643 1.505l-1.821 4.41h4.65c.484 0 .934.411 1.118.84l1.929 4.427a1.13 1.13 0 0 1-.643 1.5 1.213 1.213 0 0 1-1.565-.617l-1.637-4.007H9.643l-1.77 4.007c-.257.587-.956.861-1.564.617a1.13 1.13 0 0 1-.643-1.5l4.598-10.56c.253-.587.952-.862 1.56-.617z"/><path fill="#FFC301" d="M13.929 10.714a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        </>
      )}
    </BaseIcon>
));

IconAsm.displayName = 'Asm';

export default IconAsm;
