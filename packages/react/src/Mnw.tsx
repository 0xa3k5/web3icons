
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMnw = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m7.191 7.316-2.455 9.099c-.159.59.608.994 1.02.53l3.282-3.685 2.015 2.28a1.276 1.276 0 0 0 1.903 0l2.014-2.275 3.274 3.664c.416.463 1.179.06 1.02-.532L16.813 7.33a1.225 1.225 0 0 0-2.096-.48L12 9.922 9.29 6.844a1.226 1.226 0 0 0-2.095.472z"/><path fill="currentColor" d="m7.191 7.316-1.615 5.987a1.82 1.82 0 0 1 2.464-.943c.428.202.763.583.998.9l2.015 2.272a1.275 1.275 0 0 0 1.903 0l2.014-2.272 2.636-2.995a3.745 3.745 0 0 1-5.61-.343L9.287 6.844a1.226 1.226 0 0 0-2.096.472"/><path fill="currentColor" d="m14.97 13.26 3.274 3.664c.416.463 1.179.06 1.02-.531l-1.658-6.129zM5.576 13.299l-.84 3.111c-.159.592.608.994 1.02.532l3.282-3.686a2.53 2.53 0 0 0-1.08-.93 1.82 1.82 0 0 0-2.387.973z"/>
        </>
      ) : (
        <>
          <path fill="url(#MNW__a)" d="m7.192 7.316-2.456 9.099c-.158.59.609.994 1.02.53L9.04 13.26l2.014 2.28a1.28 1.28 0 0 0 1.903 0l2.014-2.275 3.275 3.664c.415.463 1.178.06 1.02-.532L16.813 7.33a1.225 1.225 0 0 0-2.095-.48L12 9.922 9.292 6.844a1.226 1.226 0 0 0-2.096.472z"/><path fill="url(#MNW__b)" d="m7.192 7.316-1.616 5.987a1.82 1.82 0 0 1 2.464-.943c.429.202.763.583.999.9l2.014 2.272a1.276 1.276 0 0 0 1.903 0l2.014-2.272 2.636-2.995a3.745 3.745 0 0 1-5.61-.343L9.288 6.844a1.226 1.226 0 0 0-2.096.472"/><path fill="url(#MNW__c)" d="m14.97 13.26 3.275 3.664c.415.463 1.178.06 1.02-.531l-1.659-6.129z"/><path fill="url(#MNW__d)" d="m5.576 13.299-.84 3.111c-.158.592.609.994 1.02.532l3.283-3.686a2.53 2.53 0 0 0-1.08-.93 1.82 1.82 0 0 0-2.387.973z"/><defs><linearGradient id="MNW__a" x1="15.493" x2="14.988" y1="7.282" y2="10.852" gradientUnits="userSpaceOnUse"><stop stopColor="#5083A9"/><stop offset="1" stopColor="#12132C"/></linearGradient><linearGradient id="MNW__b" x1="17.869" x2="4.716" y1="12.585" y2="12.898" gradientUnits="userSpaceOnUse"><stop stopColor="#1C2849"/><stop offset="1" stopColor="#5893BA"/></linearGradient><linearGradient id="MNW__c" x1="9.75" x2="11.545" y1="8.814" y2="17.654" gradientUnits="userSpaceOnUse"><stop stopColor="#13182F"/><stop offset="1" stopColor="#5284AC"/></linearGradient><linearGradient id="MNW__d" x1="8.058" x2="5.443" y1="12.497" y2="16.834" gradientUnits="userSpaceOnUse"><stop stopColor="#1C2849"/><stop offset="1" stopColor="#436C92"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconMnw.displayName = 'Mnw';
IconMnw.variants = 'brandedmono';

export default IconMnw;
