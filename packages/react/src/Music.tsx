
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMusic = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.136 5.242A7 7 0 0 0 12 5.143a6.857 6.857 0 0 0-5.631 10.77c.471-.69 1.56-1.17 2.82-1.17.865 0 1.65.227 2.207.596zm3.643 1.847c1.187 2.618.145 4.02.145 4.02-.801-2.417-3.128-2.773-3.128-2.773s-1.539 8.25-1.539 8.357c0 .891-.947 1.645-2.237 1.872A6.86 6.86 0 0 0 18.857 12a6.83 6.83 0 0 0-2.078-4.912"/>
        </>
      ) : (
        <>
          <path fill="#FBBF02" d="M13.136 5.242A7 7 0 0 0 12 5.143a6.857 6.857 0 0 0-5.631 10.77c.471-.69 1.56-1.17 2.82-1.17.865 0 1.65.227 2.207.596zm3.643 1.847c1.187 2.618.145 4.02.145 4.02-.801-2.417-3.128-2.773-3.128-2.773s-1.539 8.25-1.539 8.357c0 .891-.947 1.645-2.237 1.872A6.86 6.86 0 0 0 18.857 12a6.83 6.83 0 0 0-2.078-4.912"/>
        </>
      )}
    </BaseIcon>
));

IconMusic.displayName = 'Music';
IconMusic.variants = 'brandedmono';

export default IconMusic;
