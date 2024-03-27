
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAtlas = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m12 9.429-3.043 6.887c-.099.218-.154.398-.373.398H6.57c-.287 0-.446-.081-.3-.398L11.18 5.04c.099-.189.163-.326.386-.326h.87c.219 0 .279.137.386.326l4.911 11.272c.142.32-.021.402-.308.402h-2.01c-.219 0-.279-.18-.373-.398L12 9.424z"/>
    <path fill="currentColor" d="m12.004 19.714-2.01-3.857h3.952z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="m12 9.429-3.043 6.887c-.099.218-.154.398-.373.398H6.57c-.287 0-.446-.081-.3-.398L11.18 5.04c.099-.189.163-.326.386-.326h.87c.219 0 .279.137.386.326l4.911 11.272c.142.32-.021.402-.308.402h-2.01c-.219 0-.279-.18-.373-.398L12 9.424z"/>
    <path fill="#3FF" d="m12.004 19.714-2.01-3.857h3.952z"/>

        </>
      )}
    </BaseIcon>
));

IconAtlas.displayName = 'Atlas';

export default IconAtlas;
