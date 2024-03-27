
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTulip = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.571 14.079v2.764c-.998-1.774-3.214-2.524-4.714-2.524 0 3.668 3.056 4.967 5.143 4.967 2.091 0 5.143-1.299 5.143-4.967-1.5 0-3.716.75-4.715 2.524v-2.756a.93.93 0 0 1-.857-.008"/>
    <path fill="currentColor" d="M12.656 4.616c2.563 3.325 1.616 6.998-.013 9.227a.793.793 0 0 1-1.299 0C9.7 11.66 8.59 8.104 11.337 4.616a.827.827 0 0 1 1.32 0"/>
    <path fill="currentColor" d="M8.417 5.464c3.802 1.552 4.727 5.238 4.372 8.015a.814.814 0 0 1-1.149.634c-2.473-1.041-5.117-3.553-4.393-8.01a.845.845 0 0 1 1.17-.643z"/>
    <path fill="currentColor" d="M16.761 6.116c.643 4.212-1.92 6.908-4.392 7.997a.814.814 0 0 1-1.153-.626c-.39-2.747.338-6.42 4.38-8.019a.844.844 0 0 1 1.165.643z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#TULIP__a)" d="M11.572 14.079v2.764c-.999-1.774-3.215-2.524-4.715-2.524 0 3.668 3.056 4.967 5.143 4.967 2.092 0 5.143-1.299 5.143-4.967-1.5 0-3.716.75-4.714 2.524v-2.756a.93.93 0 0 1-.857-.008" opacity=".45"/>
    <path fill="url(#TULIP__b)" d="M12.656 4.616c2.563 3.325 1.616 6.998-.013 9.227a.793.793 0 0 1-1.299 0C9.7 11.66 8.59 8.104 11.337 4.616a.827.827 0 0 1 1.32 0" opacity=".45"/>
    <path fill="url(#TULIP__c)" d="M8.418 5.464c3.801 1.552 4.727 5.238 4.371 8.015a.814.814 0 0 1-1.149.634c-2.472-1.041-5.117-3.553-4.392-8.01a.845.845 0 0 1 1.17-.643z" opacity=".45"/>
    <path fill="url(#TULIP__d)" d="M16.761 6.116c.643 4.212-1.92 6.908-4.392 7.997a.814.814 0 0 1-1.153-.626c-.39-2.747.338-6.42 4.38-8.019a.844.844 0 0 1 1.165.643z" opacity=".45"/>
    <defs>
        <linearGradient id="TULIP__a" x1="7.307" x2="16.766" y1="20.764" y2="20.499" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5784C2"/>
            <stop offset="1" stopColor="#1BE6B3"/>
        </linearGradient>
        <linearGradient id="TULIP__b" x1="12" x2="12" y1="3.853" y2="14.614" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D141E9"/>
            <stop offset=".5" stopColor="#5F7DC1"/>
            <stop offset="1" stopColor="#2BD9B9"/>
        </linearGradient>
        <linearGradient id="TULIP__c" x1="7.449" x2="12.943" y1="5.13" y2="14.246" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D141E9"/>
            <stop offset=".5" stopColor="#5F7DC1"/>
            <stop offset="1" stopColor="#2BD9B9"/>
        </linearGradient>
        <linearGradient id="TULIP__d" x1="16.564" x2="11.07" y1="5.143" y2="14.258" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D141E9"/>
            <stop offset=".5" stopColor="#5F7DC1"/>
            <stop offset="1" stopColor="#2BD9B9"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconTulip.displayName = 'Tulip';

export default IconTulip;
