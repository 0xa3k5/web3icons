
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconProps = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9 9h4.286V5.266c-.484-.108-.769-.123-1.286-.123A6.857 6.857 0 0 0 5.143 12c0 2.673 1.627 4.986 3.857 6.118zm6-3.117V15h-4.286v3.69c.485.108.77.167 1.286.167A6.857 6.857 0 0 0 18.857 12c0-2.672-1.626-4.986-3.857-6.117m-1.714 7.403h-2.572v-2.572h2.572z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#24D2FD" d="M9 9h4.285V5.266c-.484-.108-.768-.123-1.285-.123A6.857 6.857 0 0 0 5.143 12c0 2.673 1.626 4.986 3.857 6.118zm6-3.117V15h-4.286v3.69c.484.108.769.167 1.286.167A6.857 6.857 0 0 0 18.857 12c0-2.672-1.627-4.986-3.857-6.117m-1.715 7.403h-2.571v-2.572h2.571z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconProps.displayName = 'Props';

export default IconProps;
