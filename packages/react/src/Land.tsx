
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLand = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.857 9.108v5.87L12 17.97v1.959l-6.857-4.072V8.143z"/><path fill="currentColor" d="M8.572 10.072v3.856L12 15.857V12z"/><path fill="currentColor" d="m8.572 6.12 3.47-2.049 6.815 4.072L12 12l-3.428-1.928zM6.857 7.13 5.143 8.144l1.714.964z"/><path fill="currentColor" d="m12.003 17.968.001 1.96 6.853-4.07V8.142L12 12l.002 3.856 5.141-2.999V15z"/>
        </>
      ) : (
        <>
          <path fill="url(#LAND__a)" d="M6.857 9.108v5.87L12 17.97v1.959l-6.857-4.072V8.143z"/><path fill="url(#LAND__b)" d="M8.572 10.072v3.856L12 15.857V12z"/><path fill="url(#LAND__c)" d="m8.572 6.12 3.47-2.049 6.815 4.072L12 12l-3.428-1.928z"/><path fill="url(#LAND__d)" d="M6.857 7.13 5.143 8.144l1.714.964z"/><path fill="url(#LAND__e)" d="m12.003 17.968.001 1.96 6.853-4.07V8.142L12 12l.002 3.856 5.141-2.999V15z"/><defs><linearGradient id="LAND__a" x1="5.61" x2="9.93" y1="8.82" y2="19.384" gradientUnits="userSpaceOnUse"><stop stopColor="#5C93F7"/><stop offset="1" stopColor="#1159DF"/></linearGradient><linearGradient id="LAND__b" x1="5.61" x2="9.93" y1="8.82" y2="19.384" gradientUnits="userSpaceOnUse"><stop stopColor="#5C93F7"/><stop offset="1" stopColor="#1159DF"/></linearGradient><linearGradient id="LAND__c" x1="12.004" x2="12.004" y1="4.071" y2="11.991" gradientUnits="userSpaceOnUse"><stop stopColor="#6695FE"/><stop offset="1" stopColor="#0B57E0"/></linearGradient><linearGradient id="LAND__d" x1="12.004" x2="12.004" y1="4.071" y2="11.991" gradientUnits="userSpaceOnUse"><stop stopColor="#6695FE"/><stop offset="1" stopColor="#0B57E0"/></linearGradient><linearGradient id="LAND__e" x1="18.086" x2="14.117" y1="8.4" y2="19.933" gradientUnits="userSpaceOnUse"><stop stopColor="#084BCE"/><stop offset="1" stopColor="#09166A"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLand.displayName = 'Land';
IconLand.variants = 'brandedmono';

export default IconLand;
