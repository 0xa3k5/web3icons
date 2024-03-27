
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTnt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15 14.263a40.6 40.6 0 0 0-6 0l-.2-2.658a43 43 0 0 1 6.403 0zm-1.714 4.165a21 21 0 0 0-2.572 0c-.025-.908-.068-1.234-.094-2.143a23 23 0 0 1 2.743 0zM5.143 7.453l.441 3.107c.258-.455.386-.686.652-1.132 3.868-.577 7.8-.57 11.666.022.214.441.313.664.514 1.11.171-1.243.261-1.864.441-3.107a39.9 39.9 0 0 0-13.714 0"/>

        </>
      ) : (
        <>
          
    <path fill="#F94081" d="M15 14.263a40.6 40.6 0 0 0-6 0l-.202-2.658a43 43 0 0 1 6.403 0zm-1.715 4.165a21 21 0 0 0-2.571 0c-.026-.908-.069-1.234-.094-2.143a23 23 0 0 1 2.743 0zM5.143 7.453l.441 3.107c.257-.455.386-.686.651-1.132 3.868-.577 7.8-.57 11.666.022.214.441.313.664.514 1.11.172-1.243.262-1.864.442-3.107a39.9 39.9 0 0 0-13.714 0"/>

        </>
      )}
    </BaseIcon>
));

IconTnt.displayName = 'Tnt';

export default IconTnt;
