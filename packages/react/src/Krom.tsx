
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKrom = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m17.267 17.327-5.241-4.462-5.383 4.552c-.416.351-1.072.068-1.072-.467v-9.9c0-.536.656-.814 1.072-.467l5.383 4.573 5.288-4.513a.686.686 0 0 1 .943.051.627.627 0 0 1-.056.913l-5.16 4.38 5.122 4.371a.63.63 0 0 1 .064.909.695.695 0 0 1-.96.06m-10.41-8.91v7.127l4.153-3.54z"/>
        </>
      ) : (
        <>
          <path fill="url(#KROM__a)" d="m17.267 17.327-5.241-4.462-5.383 4.552c-.416.351-1.072.068-1.072-.467v-9.9c0-.536.656-.814 1.072-.467l5.383 4.573 5.288-4.513a.686.686 0 0 1 .943.051.627.627 0 0 1-.056.913l-5.16 4.38 5.122 4.371a.63.63 0 0 1 .064.909.695.695 0 0 1-.96.06m-10.41-8.91v7.127l4.153-3.54z"/><defs><linearGradient id="KROM__a" x1="5.571" x2="18.428" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#9EEBFD"/><stop offset=".23" stopColor="#AAC5F9"/><stop offset=".52" stopColor="#A5BCF8"/><stop offset=".74" stopColor="#B6B5F7"/><stop offset=".9" stopColor="#EBB0F2"/><stop offset="1" stopColor="#AEA0F4"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconKrom.displayName = 'Krom';
IconKrom.variants = 'brandedmono';

export default IconKrom;
