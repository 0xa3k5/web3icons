
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDeso = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.857 5.572v3.214L15 13.483l-8.143 4.946h6.63c2.258 0 4.084-1.586 4.084-3.536V12z"/><path fill="currentColor" d="M6.857 5.572 17.57 12V9.107c0-1.954-1.83-3.535-4.084-3.535zM12.364 11.962l-5.507 3.257v3.21L15 13.483z"/>
        </>
      ) : (
        <>
          <path fill="url(#DESO__a)" d="M6.857 5.572v3.214L15 13.483l-8.143 4.946h6.63c2.259 0 4.085-1.586 4.085-3.536V12z"/><path fill="url(#DESO__b)" d="M6.857 5.572 17.572 12V9.107c0-1.954-1.83-3.535-4.085-3.535z"/><path fill="url(#DESO__c)" d="m12.365 11.962-5.508 3.257v3.21L15 13.483z"/><defs><linearGradient id="DESO__a" x1="6.857" x2="15.986" y1="7.714" y2="17.01" gradientUnits="userSpaceOnUse"><stop stopColor="#3FA3FF"/><stop offset="1" stopColor="#F0F8FF"/></linearGradient><linearGradient id="DESO__b" x1="6.857" x2="19.589" y1="5.572" y2="8.831" gradientUnits="userSpaceOnUse"><stop stopColor="#84C3FF"/><stop offset="1" stopColor="#FBFEFF"/></linearGradient><linearGradient id="DESO__c" x1="7.286" x2="13.667" y1="16.929" y2="13.209" gradientUnits="userSpaceOnUse"><stop stopColor="#A8D5FF"/><stop offset="1" stopColor="#F6FBFF"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconDeso.displayName = 'Deso';

export default IconDeso;
