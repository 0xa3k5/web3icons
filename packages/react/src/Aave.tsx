
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAave = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M17.948 16.854 13.526 5.98a1.2 1.2 0 0 0-.423-.6 1.18 1.18 0 0 0-.688-.236h-.389a1.18 1.18 0 0 0-.686.238c-.199.15-.346.36-.421.598l-1.924 4.74-1.18-.005c-1.285 0-1.285 1.714 0 1.714h.503l-1.834 4.426a1 1 0 0 0-.055.309.86.86 0 0 0 .216.604.76.76 0 0 0 .587.232.8.8 0 0 0 .457-.155 1 1 0 0 0 .313-.407l2.024-5.009h.989c1.302 0 1.302-1.714.01-1.714l-.348.004 1.543-3.921 4.207 10.64a1 1 0 0 0 .312.407.8.8 0 0 0 .457.155.75.75 0 0 0 .591-.232.86.86 0 0 0 .212-.604.7.7 0 0 0-.05-.309"/>
        </>
      ) : (
        <>
          <path fill="url(#AAVE__a)" d="M17.949 16.854 13.526 5.98a1.2 1.2 0 0 0-.423-.6 1.18 1.18 0 0 0-.688-.236h-.388a1.18 1.18 0 0 0-.686.238c-.2.15-.347.36-.422.598l-1.923 4.74-1.18-.005c-1.286 0-1.286 1.714 0 1.714h.503l-1.834 4.426a1 1 0 0 0-.056.309.86.86 0 0 0 .216.604.76.76 0 0 0 .588.232.8.8 0 0 0 .456-.155 1 1 0 0 0 .313-.407l2.025-5.009h.988c1.302 0 1.302-1.714.01-1.714l-.347.004 1.543-3.921 4.206 10.64a1 1 0 0 0 .313.407.8.8 0 0 0 .456.155.75.75 0 0 0 .592-.232.86.86 0 0 0 .212-.604.7.7 0 0 0-.051-.309"/><defs><linearGradient id="AAVE__a" x1="18.517" x2="4.817" y1="4.569" y2="16.899" gradientUnits="userSpaceOnUse"><stop stopColor="#B14992"/><stop offset=".24" stopColor="#925C9A"/><stop offset=".492" stopColor="#647BA6"/><stop offset=".671" stopColor="#3896B1"/><stop offset=".956" stopColor="#00ABBB"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconAave.displayName = 'Aave';
IconAave.variants = 'brandedmono';

export default IconAave;
