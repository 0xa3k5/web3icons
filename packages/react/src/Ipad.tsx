
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIpad = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m3.857 12 1.286-1.286L6.428 12l-1.285 1.286zM5.571 13.714l1.286-1.286 3 3-1.286 1.286zM9 13.714l1.286-1.286 1.285 1.286L10.286 15zM10.714 12 12 10.714 13.286 12 12 13.286zM12.428 10.286 13.714 9 15 10.286l-1.286 1.285zM14.143 8.571l1.285-1.285 3 3-1.285 1.285zM12.428 13.714l1.286-1.286L15 13.715 13.714 15zM14.143 15.429l3-3 1.285 1.285-3 3zM17.571 12l1.286-1.286L20.143 12l-1.286 1.286zM5.571 10.286l3-3L9.857 8.57l-3 3zM9 10.286 10.286 9l1.285 1.286-1.285 1.285z"/>
        </>
      ) : (
        <>
          <path fill="url(#IPAD__a)" d="m3.857 12 1.286-1.286L6.43 12l-1.286 1.286z"/><path fill="url(#IPAD__b)" d="m5.572 13.714 1.285-1.286 3 3-1.285 1.286z"/><path fill="url(#IPAD__c)" d="m9 13.714 1.286-1.286 1.286 1.286L10.286 15z"/><path fill="url(#IPAD__d)" d="M10.715 12 12 10.714 13.286 12 12 13.286z"/><path fill="url(#IPAD__e)" d="M12.429 10.286 13.715 9 15 10.286l-1.285 1.285z"/><path fill="#F3BA2F" d="m14.143 8.571 1.286-1.285 3 3-1.286 1.285z"/><path fill="url(#IPAD__f)" d="m12.429 13.714 1.286-1.286L15 13.715 13.715 15z"/><path fill="url(#IPAD__g)" d="m14.143 15.429 3-3 1.286 1.285-3 3z"/><path fill="#F3BA2F" d="m17.572 12 1.285-1.286L20.143 12l-1.286 1.286z"/><path fill="url(#IPAD__h)" d="m5.572 10.286 3-3L9.857 8.57l-3 3z"/><path fill="url(#IPAD__i)" d="M9 10.286 10.286 9l1.286 1.286-1.286 1.285z"/><defs><linearGradient id="IPAD__a" x1="9.643" x2="10.937" y1="10.929" y2="9.639" gradientUnits="userSpaceOnUse"><stop stopColor="#4086FF"/><stop offset="1" stopColor="#48D5FF"/></linearGradient><linearGradient id="IPAD__b" x1="9.557" x2="12.019" y1="13.414" y2="9.163" gradientUnits="userSpaceOnUse"><stop stopColor="#4086FF"/><stop offset="1" stopColor="#48D5FF"/></linearGradient><linearGradient id="IPAD__c" x1="9.643" x2="10.937" y1="10.929" y2="9.639" gradientUnits="userSpaceOnUse"><stop stopColor="#4086FF"/><stop offset="1" stopColor="#48D5FF"/></linearGradient><linearGradient id="IPAD__d" x1="7.929" x2="12.017" y1="14.357" y2="7.295" gradientUnits="userSpaceOnUse"><stop stopColor="#E8BB41"/><stop offset="1" stopColor="#F6DA5B"/></linearGradient><linearGradient id="IPAD__e" x1="7.929" x2="12.017" y1="14.357" y2="7.295" gradientUnits="userSpaceOnUse"><stop stopColor="#E8BB41"/><stop offset="1" stopColor="#F6DA5B"/></linearGradient><linearGradient id="IPAD__f" x1="7.929" x2="12.017" y1="14.357" y2="7.295" gradientUnits="userSpaceOnUse"><stop stopColor="#E8BB41"/><stop offset="1" stopColor="#F6DA5B"/></linearGradient><linearGradient id="IPAD__g" x1="6.3" x2="12.024" y1="15.3" y2="5.414" gradientUnits="userSpaceOnUse"><stop stopColor="#E8BB41"/><stop offset="1" stopColor="#F6DA5B"/></linearGradient><linearGradient id="IPAD__h" x1="6.3" x2="12.098" y1="15.3" y2="5.371" gradientUnits="userSpaceOnUse"><stop stopColor="#4086FF"/><stop offset="1" stopColor="#48D5FF"/></linearGradient><linearGradient id="IPAD__i" x1="9.643" x2="10.937" y1="10.929" y2="9.639" gradientUnits="userSpaceOnUse"><stop stopColor="#4086FF"/><stop offset="1" stopColor="#48D5FF"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconIpad.displayName = 'Ipad';
IconIpad.variants = 'brandedmono';

export default IconIpad;
