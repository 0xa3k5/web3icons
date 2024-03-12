
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const Icon2dai = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.714 9H21v6.429h-1.286zM18.857 12.429l-3.214-5.143-3.215 5.143h1.492l1.723-2.756 1.723 2.755z"/><path fill="currentColor" d="m13.748 15.429 1.128-2.212h1.534l1.127 2.211L19.286 12H12z"/><path fill="currentColor" d="M8.143 11.053v1.971c.025.086.171.262.578.262.502 0 1.136-.395 1.136-1.269 0-.87-.917-1.303-1.346-1.303h-.038a.335.335 0 0 0-.33.339m.257.236v1.478c.017.069.124.202.407.202.356 0 .801-.3.801-.956s-.642-.982-.951-.982h-.026c-.128 0-.231.116-.231.258M2.571 10.594l1.286-.737h1.646l.925.892v1.44a3 3 0 0 1-.334.274c-.18.137-.343.261-.403.394h.737v1.714H3.077l-.506-.235v-.943c.575-.412 1.766-1.329 1.967-1.697-.098-.035-.792.197-1.122.317l-.472-.317zM3 10.577l1.05-.45h1.328l.622.699v1.127l-.737.943v.175h1.131v1.072H3v-.733c.446-.261 1.436-.943 1.826-1.577-.073-.347-.27-.6-.429-.6-.099 0-.549.146-.9.257l-.24.081z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M9 9.429H6.428v5.142H9A2.571 2.571 0 0 0 9 9.43m0 .428H6.857v4.286H9a2.143 2.143 0 0 0 0-4.286" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#2DAI__a)" d="M19.714 9H21v6.429h-1.286z"/><path fill="url(#2DAI__b)" d="m18.857 12.429-3.214-5.143-3.215 5.143h1.492l1.723-2.756 1.723 2.755z"/><path fill="#F15A38" d="m13.748 15.429 1.128-2.212h1.534l1.127 2.211L19.286 12H12z"/><path fill="url(#2DAI__c)" d="M8.143 11.053v1.971c.025.086.171.262.578.262.502 0 1.136-.395 1.136-1.269 0-.87-.917-1.303-1.346-1.303h-.038a.335.335 0 0 0-.33.339m.257.236v1.478c.017.069.124.202.407.202.356 0 .801-.3.801-.956s-.642-.982-.951-.982h-.026c-.128 0-.231.116-.231.258" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#2DAI__d)" d="m2.571 10.594 1.286-.737h1.646l.925.892v1.44a3 3 0 0 1-.334.274c-.18.137-.343.261-.403.394h.737v1.714H3.077l-.506-.235v-.943c.575-.412 1.766-1.329 1.967-1.697-.098-.035-.792.197-1.122.317l-.472-.317zM3 10.577l1.05-.45h1.328l.622.699v1.127l-.737.943v.175h1.131v1.072H3v-.733c.446-.261 1.436-.943 1.826-1.577-.073-.347-.27-.6-.429-.6-.099 0-.549.146-.9.257l-.24.081z" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#2DAI__e)" d="M9 9.429H6.428v5.142H9A2.571 2.571 0 0 0 9 9.43m0 .428H6.857v4.286H9a2.143 2.143 0 0 0 0-4.286" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="2DAI__a" x1="21" x2="2.571" y1="9.701" y2="9.701" gradientUnits="userSpaceOnUse"><stop offset=".32" stopColor="#F65C38"/><stop offset=".62" stopColor="#ED5438"/></linearGradient><linearGradient id="2DAI__b" x1="15.52" x2="9.537" y1="10.746" y2="18.865" gradientUnits="userSpaceOnUse"><stop stopColor="#F55D39"/><stop offset="1" stopColor="#D43155"/></linearGradient><linearGradient id="2DAI__c" x1="11.786" x2="11.786" y1="7.286" y2="15.428" gradientUnits="userSpaceOnUse"><stop stopColor="#523C70"/><stop offset="1" stopColor="#726CAC"/></linearGradient><linearGradient id="2DAI__d" x1="4.906" x2="8.337" y1="8.337" y2="19.367" gradientUnits="userSpaceOnUse"><stop stopColor="#787BB1"/><stop offset=".43" stopColor="#40305F"/><stop offset="1" stopColor="#5A437C"/></linearGradient><linearGradient id="2DAI__e" x1="9" x2="9" y1="9.429" y2="14.572" gradientUnits="userSpaceOnUse"><stop stopColor="#726CAC"/><stop offset="1" stopColor="#523C70"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

Icon2dai.displayName = '2dai';
Icon2dai.variants = 'brandedmono';

export default Icon2dai;
