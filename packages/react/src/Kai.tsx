
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKai = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.143 10.714 9 5.545l3.429 1.74z"/>
    <path fill="currentColor" d="M11.143 10.714v-3l1.286-.428zm0-3L9 5.545l3.429 1.74zm8.786 2.143h-3.643l1.714 3z"/>
    <path fill="currentColor" d="m16.286 9.857-3.215 1.286L18 12.857z"/>
    <path fill="currentColor" d="m14.534 6.857-1.463 4.286 3.215-1.286z"/>
    <path fill="currentColor" d="m18.214 6.214-1.928 3.643h3.643z"/>
    <path fill="currentColor" d="m14.534 6.857 1.752 3 1.928-3.643zm-1.248 12.215-2.357-6.643 5.785 2.143z"/>
    <path fill="currentColor" d="M13.286 19.072v-4.5h3.428zm0-4.5-2.357-2.143 5.785 2.143zM7.071 6 4.5 9.214l2.571 6 4.5 4.286z"/>
    <path fill="currentColor" d="m9.214 12.429-2.143 2.785 4.5 4.286zm-2.143-1.5L4.5 9.214l2.571 6 2.143-2.785z"/>

        </>
      ) : (
        <>
          
    <path fill="#7E4778" d="M11.143 10.714 9 5.545l3.429 1.74z"/>
    <path fill="#9B1B2E" d="M11.143 10.714v-3l1.286-.428z"/>
    <path fill="#D3302D" d="M11.143 7.714 9 5.545l3.429 1.74z"/>
    <path fill="#9B2026" d="M19.929 9.857h-3.643l1.714 3z"/>
    <path fill="#BD282E" d="m16.286 9.857-3.215 1.286L18 12.857z"/>
    <path fill="#DD2A2D" d="m14.534 6.857-1.463 4.286 3.215-1.286z"/>
    <path fill="#BC2328" d="m18.214 6.214-1.928 3.643h3.643z"/>
    <path fill="#EE4642" d="m14.534 6.857 1.752 3 1.928-3.643z"/>
    <path fill="#D5302D" d="m13.286 19.072-2.357-6.643 5.785 2.143z"/>
    <path fill="#9D1C21" d="M13.286 19.072v-4.5h3.428z"/>
    <path fill="#BD2C33" d="m13.286 14.572-2.357-2.143 5.785 2.143z"/>
    <path fill="#797CB3" d="M7.071 6 4.5 9.214l2.571 6 4.5 4.286z"/>
    <path fill="#9A1C31" d="m9.214 12.429-2.143 2.785 4.5 4.286z"/>
    <path fill="#7F4778" d="M7.071 10.929 4.5 9.214l2.571 6 2.143-2.785z"/>

        </>
      )}
    </BaseIcon>
));

IconKai.displayName = 'Kai';

export default IconKai;
