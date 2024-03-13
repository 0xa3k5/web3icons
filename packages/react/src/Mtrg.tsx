
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMtrg = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 4.714a7.5 7.5 0 0 1 6.857 4.715l-1.286.214A5.97 5.97 0 0 0 12 6.039C8.666 6.039 5.93 8.653 6 12l-1.2 1.136A7.3 7.3 0 0 1 12 4.714m-5.447 9.708a5.98 5.98 0 0 0 5.443 3.54c3.372 0 6.107-2.83 6.004-6.176l1.234-.66A7.29 7.29 0 0 1 12 19.286 7.31 7.31 0 0 1 5.383 15z"/><path fill="currentColor" d="m3.857 14.572 7.286-5.143-.429 2.143L15 9.429l-.429 2.143 5.572-1.715-7.5 3.643.643-1.928L9 13.714 9.428 12z"/>
        </>
      ) : (
        <>
          <path fill="#1C2C5F" d="M12 4.714a7.5 7.5 0 0 1 6.857 4.715l-1.285.214A5.97 5.97 0 0 0 12 6.039c-3.334 0-6.068 2.614-6 5.961l-1.2 1.136A7.3 7.3 0 0 1 12 4.714m-5.447 9.708a5.98 5.98 0 0 0 5.443 3.54c3.373 0 6.107-2.83 6.004-6.176l1.235-.66A7.292 7.292 0 0 1 12 19.286 7.31 7.31 0 0 1 5.383 15z"/><path fill="#1C2C5F" d="m3.857 14.572 7.286-5.143-.428 2.143L15 9.429l-.428 2.143 5.571-1.715-7.5 3.643.643-1.928L9 13.714 9.43 12z"/>
        </>
      )}
    </BaseIcon>
));

IconMtrg.displayName = 'Mtrg';

export default IconMtrg;
