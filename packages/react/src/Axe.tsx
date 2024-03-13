
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAxe = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.932 11.066 8.443 5.143l3.489 3.66 3.681-3.66z"/><path fill="currentColor" d="m12.013 10.941 3.6-5.798-1.307 1.303zM9.815 6.58 8.443 5.143l3.429 5.816zM11.932 12.934l-3.489 5.923 3.489-3.66 3.681 3.66z"/><path fill="currentColor" d="m12.013 13.059 3.6 5.798-1.307-1.303-2.293-4.5zM9.815 17.42l-1.372 1.436 3.429-5.816z"/><path fill="currentColor" d="m8.756 12.039-3.613-3.66L8.26 5.22l3.711 5.854 3.772-5.854 3.115 3.159-3.612 3.66 3.612 3.66-3.115 3.158-3.772-5.871-3.711 5.871L5.143 15.7z"/>
        </>
      ) : (
        <>
          <path fill="#6D47EC" d="M11.931 11.066 8.443 5.143l3.488 3.66 3.682-3.66z"/><path fill="#193FE0" d="m12.013 10.941 3.6-5.798-1.308 1.303zM9.814 6.58 8.443 5.143l3.428 5.816z"/><path fill="#3052F1" d="m11.931 12.934-3.488 5.923 3.488-3.66 3.682 3.66z"/><path fill="#193FE0" d="m12.013 13.059 3.6 5.798-1.308-1.303-2.292-4.5zM9.814 17.42l-1.371 1.436 3.428-5.816z"/><path fill="url(#AXE__a)" d="m8.755 12.039-3.612-3.66L8.258 5.22l3.712 5.854L15.74 5.22l3.116 3.159-3.613 3.66 3.613 3.66-3.116 3.158-3.771-5.871-3.712 5.871L5.143 15.7z"/><defs><linearGradient id="AXE__a" x1="12" x2="12" y1="5.22" y2="18.857" gradientUnits="userSpaceOnUse"><stop stopColor="#DD76F9"/><stop offset="1" stopColor="#00C1E3"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconAxe.displayName = 'Axe';

export default IconAxe;
