
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDust = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.857 4.714h2.571v2.572H9.857z"/><path fill="currentColor" d="M7.714 5.572h3.429v2.57H7.714z"/><path fill="currentColor" d="M6.857 6.857h3.429V9H6.857z"/><path fill="currentColor" d="M5.571 8.572H9v2.57H5.57z"/><path fill="currentColor" d="M8.571 9.857h3.857v1.286H8.571z"/><path fill="currentColor" d="M8.571 10.714h2.572V12H8.57zm-1.714 0h1.286v3.429H6.857z"/><path fill="currentColor" d="M5.571 12h1.715v1.286H5.57zm2.143.857H9v4.286H7.714z"/><path fill="currentColor" d="M8.571 15h1.286v3.429H8.571zm1.286-1.286h1.286v6H9.857z"/><path fill="currentColor" d="M10.714 12.857h2.572v1.286h-2.572zm0 2.143h1.714v1.286h-1.714zm0 1.714h2.572v3h-2.572zm3.429-12H11.57v2.572h2.572z"/><path fill="currentColor" d="M16.286 5.572h-3.429v2.57h3.429z"/><path fill="currentColor" d="M17.143 6.857h-3.429V9h3.429z"/><path fill="currentColor" d="M18.428 8.572H15v2.57h3.428z"/><path fill="currentColor" d="M15.428 9.857h-3.857v1.286h3.857z"/><path fill="currentColor" d="M15.428 10.714h-2.571V12h2.571zm1.715 0h-1.286v3.429h1.286z"/><path fill="currentColor" d="M18.428 12h-1.714v1.286h1.714zm-2.142.857H15v4.286h1.286z"/><path fill="currentColor" d="M15.428 15h-1.285v3.429h1.285zm-1.285-1.286h-1.286v6h1.286z"/><path fill="currentColor" d="M13.286 15H11.57v1.286h1.715z"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M9.857 4.714h2.571v2.572H9.857z"/><path fill="#000" d="M7.714 5.572h3.429v2.57H7.714z"/><path fill="#000" d="M6.857 6.857h3.429V9H6.857z"/><path fill="#000" d="M5.571 8.572H9v2.57H5.57z"/><path fill="#000" d="M8.571 9.857h3.857v1.286H8.571z"/><path fill="#000" d="M8.571 10.714h2.572V12H8.57zm-1.714 0h1.286v3.429H6.857z"/><path fill="#000" d="M5.571 12h1.715v1.286H5.57zm2.143.857H9v4.286H7.714z"/><path fill="#000" d="M8.571 15h1.286v3.429H8.571zm1.286-1.286h1.286v6H9.857z"/><path fill="#000" d="M10.714 12.857h2.572v1.286h-2.572zm0 2.143h1.714v1.286h-1.714zm0 1.714h2.572v3h-2.572zm3.429-12H11.57v2.572h2.572z"/><path fill="#000" d="M16.286 5.572h-3.429v2.57h3.429z"/><path fill="#000" d="M17.143 6.857h-3.429V9h3.429z"/><path fill="#000" d="M18.428 8.572H15v2.57h3.428z"/><path fill="#000" d="M15.428 9.857h-3.857v1.286h3.857z"/><path fill="#000" d="M15.428 10.714h-2.571V12h2.571zm1.715 0h-1.286v3.429h1.286z"/><path fill="#000" d="M18.428 12h-1.714v1.286h1.714zm-2.142.857H15v4.286h1.286z"/><path fill="#000" d="M15.428 15h-1.285v3.429h1.285zm-1.285-1.286h-1.286v6h1.286z"/><path fill="#000" d="M13.286 15H11.57v1.286h1.715z"/>
        </>
      )}
    </BaseIcon>
));

IconDust.displayName = 'Dust';

export default IconDust;
