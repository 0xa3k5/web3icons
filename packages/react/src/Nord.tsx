
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNord = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.311 12.334a.6.6 0 0 0 0-.874l-6.857-6.566a.67.67 0 0 0-.913 0L4.69 11.46a.6.6 0 0 0 0 .874l.985.943c.249.24.66.24.913 0l4.954-4.748a.67.67 0 0 1 .918 0l4.962 4.74a.66.66 0 0 0 .913 0z"/><path fill="currentColor" d="M7.899 15.446a.63.63 0 0 1 0-.892l3.655-3.655a.63.63 0 0 1 .892 0l3.655 3.655a.634.634 0 0 1 0 .892l-3.655 3.656a.634.634 0 0 1-.892 0z"/>
        </>
      ) : (
        <>
          <path fill="#00DD9A" d="M19.312 12.334a.6.6 0 0 0 0-.874l-6.857-6.566a.67.67 0 0 0-.913 0L4.689 11.46a.6.6 0 0 0 0 .874l.986.943c.248.24.66.24.913 0l4.954-4.748a.67.67 0 0 1 .917 0l4.963 4.74a.66.66 0 0 0 .913 0z"/><path fill="#172683" d="M7.899 15.446a.63.63 0 0 1 0-.892l3.656-3.655a.63.63 0 0 1 .891 0l3.656 3.655a.634.634 0 0 1 0 .892l-3.656 3.656a.634.634 0 0 1-.891 0z"/>
        </>
      )}
    </BaseIcon>
));

IconNord.displayName = 'Nord';

export default IconNord;
