
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.741 6.287A.68.68 0 0 0 12.184 6a.7.7 0 0 0-.557.279L6 14.143a10.4 10.4 0 0 1 2.593-1.354l3.578-5.002 3.416 4.937c.861.287 1.672.686 2.413 1.17zM4.714 17.67l-.428.33c.081-.103.227-.214.428-.33 1.732-1.273 5.224-3.343 8.242-3.501 4.114-.215 6.715.852 6.282 2.13-.432 1.277-3.467-.429-6.282-.429-2.473 0-6.785.986-8.242 1.8"/><path fill="currentColor" d="M13.461 15.403c-3.565 0-7.453 1.731-8.948 2.597l-.227-.343C5.81 16.774 9.78 15 13.46 15c3.27 0 4.813.613 5.276.831.107.048.15.172.099.27a.223.223 0 0 1-.292.086c-.398-.184-1.877-.784-5.083-.784"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ARC__a)"><path fill="url(#ARC__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M12.741 6.287A.68.68 0 0 0 12.184 6a.7.7 0 0 0-.557.279L6 14.143a10.4 10.4 0 0 1 2.593-1.354l3.578-5.002 3.416 4.937c.861.287 1.672.686 2.413 1.17z"/><path fill="url(#ARC__c)" d="m4.714 17.67-.428.33c.081-.103.227-.214.428-.33 1.732-1.273 5.224-3.343 8.242-3.501 4.114-.215 6.715.852 6.282 2.13-.432 1.277-3.467-.429-6.282-.429-2.473 0-6.785.986-8.242 1.8" fillOpacity=".6"/><path fill="url(#ARC__d)" d="M13.461 15.403c-3.565 0-7.453 1.731-8.948 2.597l-.227-.343C5.81 16.774 9.78 15 13.46 15c3.27 0 4.813.613 5.276.831.107.048.15.172.099.27a.223.223 0 0 1-.292.086c-.398-.184-1.877-.784-5.083-.784" fillOpacity=".6"/></g><defs><linearGradient id="ARC__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><linearGradient id="ARC__c" x1="18.806" x2="4.399" y1="12.043" y2="12.472" gradientUnits="userSpaceOnUse"><stop stopColor="#197EAF"/><stop offset="1" stopColor="#041C28" stopOpacity=".1"/></linearGradient><linearGradient id="ARC__d" x1="18.184" x2="4.718" y1="16.526" y2="18.261" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset=".54" stopColor="#AEAEAE"/><stop offset="1" stopColor="#1E1E1E"/></linearGradient><clipPath id="ARC__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconArc.displayName = 'Arc';

export default IconArc;
