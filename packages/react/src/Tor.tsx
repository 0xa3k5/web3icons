
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTor = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.314 7.642a1.071 1.071 0 1 0-.6.05v2.1l4.213-2.81-.647 4.825L6 14.764l5.083 1.886-1.153.772a1.072 1.072 0 1 0 .3.454l1.959-1.436-4.95-1.8 4.251-2.404 5.083 3.36-.789-5.109.995.506a1.07 1.07 0 1 0 .287-.429L15.08 9.553l.776 5.001-4.058-2.747.78-5.957-4.269 3V7.642zm.12-1a.506.506 0 1 1-1.011 0 .506.506 0 0 1 1.011 0m9.352 5.22a.506.506 0 1 0 0-1.01.506.506 0 0 0 0 1.01M9.72 18.215a.505.505 0 1 1-1.01 0 .505.505 0 0 1 1.01 0" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#BE7C40" d="M8.314 7.642a1.071 1.071 0 1 0-.6.05v2.1l4.213-2.81-.647 4.825L6 14.764l5.083 1.886-1.153.772a1.072 1.072 0 1 0 .3.454l1.959-1.436-4.95-1.8 4.251-2.404 5.083 3.36-.789-5.109.995.506a1.07 1.07 0 1 0 .287-.429L15.08 9.553l.776 5.001-4.058-2.747.78-5.957-4.269 3V7.642zm.12-1a.506.506 0 1 1-1.011 0 .506.506 0 0 1 1.011 0m9.352 5.22a.506.506 0 1 0 0-1.01.506.506 0 0 0 0 1.01M9.72 18.215a.505.505 0 1 1-1.01 0 .505.505 0 0 1 1.01 0" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconTor.displayName = 'Tor';

export default IconTor;
