
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPara = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m5.846 10.376 6.094 3.291c.3.163.668.163.968 0l5.25-2.841a1.294 1.294 0 0 0 0-2.302l-6-3.231a1.25 1.25 0 0 0-1.191 0L5.841 8.079a1.294 1.294 0 0 0 0 2.297z"/><path fill="currentColor" d="M7.14 12.442 12 15.013c.321.171.716.171 1.028-.013l3.742-2.156 1.384.746a1.295 1.295 0 0 1 0 2.302l-5.246 2.841a1.01 1.01 0 0 1-.968 0l-6.094-3.287a1.294 1.294 0 0 1-.005-2.302z"/>
        </>
      ) : (
        <>
          <path fill="url(#PARA__a)" d="m5.846 10.376 6.094 3.291c.3.163.668.163.968 0l5.25-2.841a1.294 1.294 0 0 0 0-2.302l-6-3.231a1.25 1.25 0 0 0-1.191 0L5.841 8.079a1.294 1.294 0 0 0 0 2.297z"/><path fill="url(#PARA__b)" d="M7.14 12.442 12 15.013c.321.171.716.171 1.028-.013l3.742-2.156 1.384.746a1.295 1.295 0 0 1 0 2.302l-5.246 2.841a1.01 1.01 0 0 1-.968 0l-6.094-3.287a1.294 1.294 0 0 1-.005-2.302z"/><defs><linearGradient id="PARA__a" x1="5.141" x2="17.374" y1="12.124" y2="12.07" gradientUnits="userSpaceOnUse"><stop stopColor="#02DAFF"/><stop offset="1" stopColor="#5414F1"/></linearGradient><linearGradient id="PARA__b" x1="5.143" x2="17.374" y1="14.61" y2="14.528" gradientUnits="userSpaceOnUse"><stop stopColor="#FECF7B"/><stop offset="1" stopColor="#EF26A8"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconPara.displayName = 'Para';

export default IconPara;
