
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBdx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0 .428a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M16.286 6.643v7.5a.857.857 0 0 1-.858.857h-4.714a.857.857 0 0 1-.857-.857V9.428a.86.86 0 0 1 .857-.857h4.449zm-4.715 4.071a.43.43 0 0 1 .429-.428h2.143a.43.43 0 0 1 .428.428v2.143a.43.43 0 0 1-.428.429H12a.43.43 0 0 1-.429-.429z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M14.571 12.857a.43.43 0 0 1-.428.429h-3.026c-.403 0-.891-.03-1.26-.643v1.5a.86.86 0 0 0 .857.857h3a.85.85 0 0 0 .857-.857z"/><path fill="currentColor" d="M12.857 8.571h-2.143a.857.857 0 0 0-.857.857v3.215c.369.613.857.643 1.26.643H12a.43.43 0 0 1-.429-.429v-2.143a.43.43 0 0 1 .429-.428h.857z"/><path fill="currentColor" d="M7.286 8.786v7.5a.86.86 0 0 0 .857.857h4.714a.857.857 0 0 0 .857-.857V11.57a.857.857 0 0 0-.857-.857H8.41zM12 12.857a.43.43 0 0 0-.429-.428H9.43a.43.43 0 0 0-.43.428V15a.43.43 0 0 0 .43.428h2.142A.43.43 0 0 0 12 15z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M7.286 14.786v1.5a.86.86 0 0 0 .857.857h3c.514 0 .857-.215.857-.857V15a.43.43 0 0 1-.429.428H8.357c-.428 0-.818-.137-1.071-.642"/><path fill="currentColor" d="M10.714 10.714H8.408L7.287 8.786v6c.253.505.643.643 1.071.643H9.43a.43.43 0 0 1-.43-.43v-2.142a.43.43 0 0 1 .43-.428h1.285z"/>
        </>
      ) : (
        <>
          <path fill="#35AF3B" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0 .428a7.713 7.713 0 1 0 0-15.427 7.713 7.713 0 0 0 0 15.427" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#BDX__a)" d="M16.286 6.643v7.5a.857.857 0 0 1-.857.857h-4.714a.857.857 0 0 1-.857-.857V9.428a.86.86 0 0 1 .857-.857h4.448zm-4.714 4.071a.43.43 0 0 1 .428-.428h2.143a.43.43 0 0 1 .429.428v2.143a.43.43 0 0 1-.429.429H12a.43.43 0 0 1-.428-.429z" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#BDX__b)" d="M14.572 12.857a.43.43 0 0 1-.429.429h-3.025c-.403 0-.892-.03-1.26-.643v1.5a.86.86 0 0 0 .857.857h3a.85.85 0 0 0 .857-.857z"/><path fill="url(#BDX__c)" d="M12.858 8.571h-2.143a.857.857 0 0 0-.857.857v3.215c.368.613.857.643 1.26.643H12a.43.43 0 0 1-.428-.429v-2.143a.43.43 0 0 1 .428-.428h.858z"/><path fill="url(#BDX__d)" d="M7.286 8.786v7.5a.86.86 0 0 0 .857.857h4.715a.857.857 0 0 0 .857-.857V11.57a.857.857 0 0 0-.857-.857H8.409zM12 12.857a.43.43 0 0 0-.428-.428H9.429a.43.43 0 0 0-.429.428V15a.43.43 0 0 0 .429.428h2.143A.43.43 0 0 0 12 15z" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#BDX__e)" d="M7.286 14.786v1.5a.86.86 0 0 0 .857.857h3c.515 0 .857-.215.857-.857V15a.43.43 0 0 1-.428.428H8.358c-.429 0-.819-.137-1.072-.642"/><path fill="url(#BDX__f)" d="M10.715 10.714H8.409L7.286 8.786v6c.253.505.643.643 1.072.643h1.071a.43.43 0 0 1-.429-.43v-2.142a.43.43 0 0 1 .429-.428h1.286z"/><defs><linearGradient id="BDX__a" x1="17.143" x2="17.143" y1="5.472" y2="17.736" gradientUnits="userSpaceOnUse"><stop stopColor="#72A8CF"/><stop offset="1" stopColor="#1071AB"/></linearGradient><linearGradient id="BDX__b" x1="19.715" x2="6.39" y1="14.104" y2="14.104" gradientUnits="userSpaceOnUse"><stop stopColor="#0F6192"/><stop offset="1" stopColor="#1473AD"/></linearGradient><linearGradient id="BDX__c" x1="8.694" x2="8.248" y1="2.182" y2="19.731" gradientUnits="userSpaceOnUse"><stop stopColor="#72A8CF"/><stop offset="1" stopColor="#116394"/></linearGradient><linearGradient id="BDX__d" x1="12" x2="12" y1="4.286" y2="19.714" gradientUnits="userSpaceOnUse"><stop stopColor="#36DD21"/><stop offset="1" stopColor="#34B238"/></linearGradient><linearGradient id="BDX__e" x1="19.715" x2="4.286" y1="12.701" y2="12.701" gradientUnits="userSpaceOnUse"><stop stopColor="#34A93A"/><stop offset="1" stopColor="#34B537"/></linearGradient><linearGradient id="BDX__f" x1="7.715" x2="7.715" y1="10.071" y2="15.428" gradientUnits="userSpaceOnUse"><stop stopColor="#35E11D"/><stop offset="1" stopColor="#31A137"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBdx.displayName = 'Bdx';
IconBdx.variants = 'brandedmono';

export default IconBdx;
