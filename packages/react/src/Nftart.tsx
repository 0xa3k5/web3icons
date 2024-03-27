
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNftart = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.286 6v4.714H5.143v2.572h1.179c.557 0 .84-.712.964-1.359V18h2.571v-7.187L14.786 18h1.929v-4.714h2.142v-2.572H17.68c-.557 0-.84.712-.964 1.359V6h-2.572v7.269L9.172 6z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#NFTART__a)" d="M7.285 6v4.714H5.143v2.572H6.32c.557 0 .84-.712.964-1.359V18h2.572v-7.187L14.785 18h1.929v-4.714h2.143v-2.572h-1.179c-.557 0-.84.712-.964 1.359V6h-2.571v7.269L9.17 6z"/>
    <defs>
        <linearGradient id="NFTART__a" x1="5.143" x2="17.673" y1="7.901" y2="17.47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D6022A"/>
            <stop offset="1" stopColor="#3C08C3"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconNftart.displayName = 'Nftart';

export default IconNftart;
