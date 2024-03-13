
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEqb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 17.143a5.142 5.142 0 0 0 .857-10.213v3.107a2.143 2.143 0 1 1-1.714 0V6.93A5.143 5.143 0 0 0 12 17.143m0 1.714a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#4BFF00" d="M12 17.143a5.142 5.142 0 0 0 .857-10.213v3.107a2.143 2.143 0 1 1-1.714 0V6.93A5.143 5.143 0 0 0 12 17.143m0 1.714a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconEqb.displayName = 'Eqb';

export default IconEqb;
