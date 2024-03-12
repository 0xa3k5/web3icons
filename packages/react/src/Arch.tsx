
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArch = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#373737" d="M9.094 9.094 5.571 5.572v12.857h12.857l-2.571-2.572H8.143V11.32c0-.729.257-1.586.951-2.229z"/><path fill="#FCFEFB" d="M8.143 11.319c0-.729.257-1.586.951-2.229L12 12l-3.857 3.857z"/><path fill="#D3DDFF" d="M15.857 15.857H8.143L12 12z"/><path fill="#FCFEFB" d="m15.857 15.857 2.571 2.572V5.572H5.571l3.523 3.522c.6-.557 1.534-.951 2.906-.951 2.948 0 3.857 1.817 3.857 3.176z"/>
    </BaseIcon>
));

IconArch.displayName = 'Arch';
IconArch.variants = 'branded';

export default IconArch;
