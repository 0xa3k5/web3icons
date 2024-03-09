
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAvt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m14.824 15.189 4.115 1.954H5.72l9.108-1.954zM11.353 4.714v3.412l-6.21 7.753z"/><path fill="currentColor" d="m19.286 8.473-5.572 2.606-5.468 8.207z"/><path fill="currentColor" d="m11.353 4.714 7.564 12.42-4.196-1.945-3.368-7.063z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AVT__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="url(#AVT__b)" d="m14.824 15.189 4.115 1.954H5.72l9.108-1.954z"/><path fill="url(#AVT__c)" d="M11.353 4.714v3.412l-6.21 7.753z"/><path fill="#5100FF" d="m19.286 8.473-5.572 2.606-5.468 8.207z"/><path fill="#1D2733" d="m11.353 4.714 7.564 12.42-4.196-1.945-3.368-7.063z"/></g><defs><linearGradient id="AVT__b" x1="7.101" x2="18.332" y1="18.711" y2="18.711" gradientUnits="userSpaceOnUse"><stop stopColor="#F2F1F1"/><stop offset="1" stopColor="#1D2733"/></linearGradient><linearGradient id="AVT__c" x1="7.105" x2="18.329" y1="19.286" y2="19.286" gradientUnits="userSpaceOnUse"><stop stopColor="#F2F1F1"/><stop offset="1" stopColor="#1D2733"/></linearGradient><clipPath id="AVT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAvt.displayName = 'Avt';

export default IconAvt;
