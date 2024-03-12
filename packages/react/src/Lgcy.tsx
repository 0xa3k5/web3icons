
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLgcy = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M11.4 4.29a.21.21 0 0 1 .172.205v14.576a.21.21 0 0 1-.205.21.2.2 0 0 1-.104-.021l-5.571-2.653a.205.205 0 0 1-.103-.27L11.16 4.406a.215.215 0 0 1 .244-.12zM6.544 15.304l4.599-4.933V5.46L6.544 15.3zm4.599-4.307-5.006 5.357 5.006 2.387zM12.6 4.29a.21.21 0 0 0-.171.205v14.576a.21.21 0 0 0 .103.18c.06.039.141.043.205.009l5.572-2.653c.103-.047.15-.171.103-.27L12.84 4.406a.214.214 0 0 0-.244-.12zm4.856 11.014-4.599-4.933V5.46l4.599 9.84zm-4.599-4.307 5.006 5.357-5.006 2.387z"/>
    </BaseIcon>
));

IconLgcy.displayName = 'Lgcy';
IconLgcy.variants = 'mono';

export default IconLgcy;
