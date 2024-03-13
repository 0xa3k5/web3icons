
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBondly = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.598 7.307 5.571 8.486v6.9l2.002 1.2 3.141-1.856v3.754l1.337.802 6.377-3.9v-1.612l-2.995-1.842 2.995-1.865V8.336l-6.377-3.622-1.337.78v3.738zm4.83 6.489 1.278-.797 3.008 1.787-4.286 2.486zm0-3.699V6.862l4.175 2.357-2.927 1.671-1.248-.797zm-5.142-.81v5.25l3.428-1.95v-1.341z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#BONDLY__a)" d="M7.598 7.307 5.571 8.486v6.9l2.002 1.2 3.141-1.856v3.754l1.337.802 6.377-3.9v-1.612l-2.995-1.842 2.995-1.865V8.336l-6.377-3.622-1.337.78v3.738zm4.83 6.489 1.278-.797 3.008 1.787-4.286 2.486zm0-3.699V6.862l4.175 2.357-2.927 1.671-1.248-.797zm-5.142-.81v5.25l3.428-1.95v-1.341z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="BONDLY__a" x1="16.486" x2="5.406" y1="6.276" y2="15.703" gradientUnits="userSpaceOnUse"><stop stopColor="#1352A2"/><stop offset="1" stopColor="#0D2E62"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBondly.displayName = 'Bondly';

export default IconBondly;
