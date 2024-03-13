
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLcx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.143 7.286V5.143L12 8.962l3.857-3.819v2.143L12 11.143zm0 9.429v2.142L12 15.04l3.857 3.818v-2.142L12 12.857zm8.572-.858h2.142L15.04 12l3.818-3.857h-2.142L12.857 12zm-9.43 0H5.144L8.962 12 5.143 8.143h2.143L11.143 12z"/>
        </>
      ) : (
        <>
          <path fill="#5E5E5E" d="M8.143 7.286V5.143L12 8.962l3.857-3.819v2.143L12 11.143zm0 9.429v2.142L12 15.04l3.857 3.818v-2.142L12 12.857zm8.571-.858h2.143L15.038 12l3.819-3.857h-2.143L12.857 12zm-9.429 0H5.143L8.96 12 5.143 8.143h2.142L11.143 12z"/>
        </>
      )}
    </BaseIcon>
));

IconLcx.displayName = 'Lcx';

export default IconLcx;
