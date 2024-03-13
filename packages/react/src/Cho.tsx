
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCho = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0M8.143 12c0-1.071.857-3 3.857-3s3.857 1.929 3.857 3-.93 3-3.857 3c-3.073 0-3.857-1.929-3.857-3" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#1C4C06" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"/><path fill="#CEFF72" d="M12 9c-3 0-3.857 1.929-3.857 3s.784 3 3.857 3c2.927 0 3.857-1.929 3.857-3S15 9 12 9"/>
        </>
      )}
    </BaseIcon>
));

IconCho.displayName = 'Cho';

export default IconCho;
