
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSfp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.041 5.606a1.57 1.57 0 0 1 1.115-.463h7.701l-3.3 3.429H9.171c-.402 0-.6.197-.6.6v5.378l-3.167-3.038a.9.9 0 0 1 0-1.273zm4.788 9.823H8.442l-3.3 3.428h7.701c.42 0 .815-.167 1.115-.462l4.637-4.633a.9.9 0 0 0 0-1.273L15.428 9.45v5.379c0 .403-.197.6-.6.6"/>

        </>
      ) : (
        <>
          
    <path fill="#4B21EF" d="M10.041 5.606a1.57 1.57 0 0 1 1.115-.463h7.701l-3.3 3.429H9.171c-.402 0-.6.197-.6.6v5.378l-3.167-3.038a.9.9 0 0 1 0-1.273zm4.788 9.823H8.442l-3.3 3.428h7.701c.42 0 .815-.167 1.115-.462l4.637-4.633a.9.9 0 0 0 0-1.273L15.428 9.45v5.379c0 .403-.197.6-.6.6"/>

        </>
      )}
    </BaseIcon>
));

IconSfp.displayName = 'Sfp';

export default IconSfp;
