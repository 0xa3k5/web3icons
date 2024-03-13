
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNwc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 4.714-4.06 2.19.406.755L12 5.69l3.653 1.97.408-.753zM6.428 8.776l.859-.5-.431-.74-1.285.748v7.56l5.572 3.442V16.2L7.94 14.2l-.454.728 2.799 1.746v1.075l-3.858-2.383zm11.143 0-.858-.5.431-.74 1.284.748v7.56l-5.571 3.442V16.2l3.201-1.999.455.728-2.799 1.746v1.075l3.857-2.383zM12 6.795l4.06 2.19-.407.754L12 7.77 8.346 9.74l-.407-.754 3.857-2.081zm-1.286 3.92h-.428v-.858h.428V9.43h.857v.428H12V9.43h.857v.428a1.285 1.285 0 0 1 1.052 2.025 1.285 1.285 0 0 1-.838 2.26h-.214v.43H12v-.43h-.429v.43h-.857v-.43h-.428v-.856h.428zm2.572.428a.43.43 0 0 1-.429.428h-1.286v-.857h1.286a.43.43 0 0 1 .429.429m-1.715 2.143v-.857h1.5a.428.428 0 1 1 0 .857z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#NWC__a)" d="m12 4.714-4.06 2.19.406.755L12 5.69l3.653 1.97.408-.753zM6.428 8.776l.859-.5-.431-.74-1.285.748v7.56l5.572 3.442V16.2L7.94 14.2l-.454.728 2.799 1.746v1.075l-3.858-2.383zm11.143 0-.858-.5.431-.74 1.284.748v7.56l-5.571 3.442V16.2l3.201-1.999.455.728-2.799 1.746v1.075l3.857-2.383zM12 6.795l4.06 2.19-.407.754L12 7.77 8.346 9.74l-.407-.754 3.857-2.081zm-1.286 3.92h-.428v-.858h.428V9.43h.857v.428H12V9.43h.857v.428a1.285 1.285 0 0 1 1.052 2.025 1.285 1.285 0 0 1-.838 2.26h-.214v.43H12v-.43h-.429v.43h-.857v-.43h-.428v-.856h.428zm2.572.428a.43.43 0 0 1-.429.428h-1.286v-.857h1.286a.43.43 0 0 1 .429.429m-1.715 2.143v-.857h1.5a.428.428 0 1 1 0 .857z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="NWC__a" x1="12" x2="12" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse"><stop stopColor="#35B4E8"/><stop offset="1" stopColor="#3476BC"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconNwc.displayName = 'Nwc';

export default IconNwc;
