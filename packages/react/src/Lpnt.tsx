
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLpnt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.286 5.571h11.142v11.143l-2.571-2.357V8.143H9.643z"/><path fill="currentColor" d="M9.643 8.143H5.57v10.285h10.286v-4.071zM15 17.57v-1.714H8.143V9H6.428v8.571z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#141B30" d="M7.286 5.571h11.142v11.143l-2.571-2.357V8.143H9.643z"/><path fill="#E82F59" d="M9.643 8.143H5.57v10.285h10.286v-4.071zM15 17.57v-1.714H8.143V9H6.428v8.571z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconLpnt.displayName = 'Lpnt';
IconLpnt.variants = 'brandedmono';

export default IconLpnt;
