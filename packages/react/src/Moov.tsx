
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMoov = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m10.714 4.363 8.289 4.885a.58.58 0 0 1 .283.498v4.525a.57.57 0 0 1-.283.497l-8.284 4.87a.56.56 0 0 1-.57 0l-3.87-2.332A.58.58 0 0 1 6 16.808V7.123c0-.206.107-.394.283-.497l3.87-2.263a.55.55 0 0 1 .561 0M8.143 6.068V17.91c0 .171.188.283.338.197l10.265-5.94a.227.227 0 0 0 0-.39L8.477 5.871a.223.223 0 0 0-.334.197"/>
    <path fill="currentColor" d="M10.286 13.564v-3.128a.574.574 0 0 1 .857-.502l2.713 1.56a.58.58 0 0 1 0 1.003l-2.709 1.569a.574.574 0 0 1-.861-.502"/>

        </>
      ) : (
        <>
          
    <path fill="url(#MOOV__a)" d="m10.714 4.363 8.289 4.885a.58.58 0 0 1 .283.498v4.525a.57.57 0 0 1-.283.497l-8.284 4.87a.56.56 0 0 1-.57 0l-3.87-2.332A.58.58 0 0 1 6 16.808V7.123c0-.206.107-.394.283-.497l3.87-2.263a.55.55 0 0 1 .561 0M8.143 6.068V17.91c0 .171.188.283.338.197l10.265-5.94a.227.227 0 0 0 0-.39L8.477 5.871a.223.223 0 0 0-.334.197"/>
    <path fill="url(#MOOV__b)" d="M10.286 13.564v-3.128a.574.574 0 0 1 .857-.502l2.713 1.56a.58.58 0 0 1 0 1.003l-2.709 1.569a.574.574 0 0 1-.861-.502"/>
    <defs>
        <linearGradient id="MOOV__a" x1="12.643" x2="12.643" y1="4.286" y2="19.714" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF825F"/>
            <stop offset="1" stopColor="#FF3E68"/>
        </linearGradient>
        <linearGradient id="MOOV__b" x1="12.215" x2="12.215" y1="9.857" y2="14.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF825F"/>
            <stop offset="1" stopColor="#FF3E68"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconMoov.displayName = 'Moov';

export default IconMoov;
