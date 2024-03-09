
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAzit = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.259 6.201 11.147 6 4.286 17.143H6.29L11.156 9.3l5.288 7.843h1.985z"/><path fill="currentColor" d="M12.484 15.429 18.43 6h-5.555l.977 1.714h1.543l-5.966 9.429h8.705l-.977-1.714z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AZIT__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="url(#AZIT__b)" d="M11.259 6.201 11.147 6 4.286 17.143H6.29L11.156 9.3l5.288 7.843h1.985z"/><path fill="#5550D2" d="M12.484 15.429 18.43 6h-5.555l.977 1.714h1.543l-5.966 9.429h8.705l-.977-1.714z"/></g><defs><linearGradient id="AZIT__b" x1="10.508" x2="16.011" y1="8.169" y2="17.366" gradientUnits="userSpaceOnUse"><stop stopColor="#3938B8"/><stop offset=".52" stopColor="#3937BD"/><stop offset="1" stopColor="#5955D9"/></linearGradient><clipPath id="AZIT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAzit.displayName = 'Azit';

export default IconAzit;
