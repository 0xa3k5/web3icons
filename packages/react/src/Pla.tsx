
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPla = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.629 7.114a1.286 1.286 0 0 1 2.314 0l4.328 8.987a.43.43 0 0 1-.385.613h-10.2a.43.43 0 0 1-.386-.613z"/>
    <path fill="currentColor" d="M10.05 6.835a1.928 1.928 0 0 1 3.471 0l4.333 8.983a1.072 1.072 0 0 1-.964 1.539H6.68a1.07 1.07 0 0 1-.964-1.539l4.329-8.983zm2.314.558a.642.642 0 0 0-1.157 0L7.024 16.07h9.519L12.36 7.397z"/>

        </>
      ) : (
        <>
          
    <path fill="#0079F0" d="M10.629 7.114a1.285 1.285 0 0 1 2.314 0l4.329 8.987a.427.427 0 0 1-.386.613h-10.2a.43.43 0 0 1-.386-.613z"/>
    <path fill="#fff" d="M10.05 6.835a1.928 1.928 0 0 1 3.472 0l4.333 8.983a1.072 1.072 0 0 1-.965 1.539H6.682a1.07 1.07 0 0 1-.964-1.539l4.328-8.983zm2.315.558a.642.642 0 0 0-1.157 0L7.025 16.07h9.518L12.36 7.397z"/>

        </>
      )}
    </BaseIcon>
));

IconPla.displayName = 'Pla';

export default IconPla;
