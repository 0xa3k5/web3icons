
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKeep = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 19.714a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428M9.428 8.571h-.857v1.715H9v3.428h-.43v1.714h3v-1.714h-.428v-1.071h.51l.865 1.071h-.09v1.714h3v-1.714h-.54l-1.49-1.723 1.443-1.705h.588V8.57h-3v1.715h.128l-.969 1.071h-.445v-1.071h.428V8.57h-.857V9h-.428v-.43h-.429V9H9.43z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#49DBB4" d="M12 19.714a7.713 7.713 0 1 0 0-15.427 7.713 7.713 0 0 0 0 15.427M9.43 8.571h-.857v1.715H9v3.428h-.428v1.714h3v-1.714h-.429v-1.071h.51l.866 1.071h-.09v1.714h3v-1.714h-.54l-1.491-1.723 1.444-1.705h.587V8.57h-3v1.715h.129l-.969 1.071h-.446v-1.071h.429V8.57h-.857V9h-.429v-.43h-.428V9h-.429z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconKeep.displayName = 'Keep';

export default IconKeep;
