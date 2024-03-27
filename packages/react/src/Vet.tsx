
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconVet = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.857 6.429h-1.225c-.3 0-.57.171-.703.441l-3.214 6.66-.005-.004-.857 1.774v.009l-.857 1.774-4.281-8.876h1.22c.3 0 .575.172.704.442l2.798 5.755.857-1.774-2.258-4.65a2.75 2.75 0 0 0-2.477-1.55H5.143L6 8.207l5.143 10.65h1.714z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#VET__a)" d="M18.857 6.429H17.63c-.3 0-.57.171-.703.441l-3.214 6.66-.004-.004-.857 1.774v.009l-.858 1.774-4.281-8.876h1.221c.3 0 .575.172.703.442l2.799 5.755.857-1.774-2.259-4.65a2.75 2.75 0 0 0-2.476-1.55H5.143L6 8.207l5.143 10.65h1.714z"/>
    <defs>
        <linearGradient id="VET__a" x1="5.143" x2="18.131" y1="19.19" y2="4.372" gradientUnits="userSpaceOnUse">
            <stop stopColor="#582974"/>
            <stop offset=".15" stopColor="#4163AD"/>
            <stop offset=".47" stopColor="#22B2F9"/>
            <stop offset=".74" stopColor="#54B1B6"/>
            <stop offset="1" stopColor="#86E931"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconVet.displayName = 'Vet';

export default IconVet;
