
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLever = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m11.614 5.143-6.9 12h5.332l6.728-12z"/><path fill="currentColor" d="m16.77 5.143-12.056 12h5.332l6.728-12zM11.687 17.143h6.742l-3.365-6z"/><path fill="currentColor" d="M15.772 17.143h2.657l-3.365-6z"/>
        </>
      ) : (
        <>
          <path fill="#fff" d="m11.614 5.143-6.9 12h5.331l6.729-12z"/><path fill="#B0B5BF" d="m16.77 5.143-12.056 12h5.331l6.729-12z"/><path fill="#5AA800" d="M11.687 17.143h6.741l-3.364-6z"/><path fill="#7FDF00" d="M15.771 17.143h2.657l-3.364-6z"/>
        </>
      )}
    </BaseIcon>
));

IconLever.displayName = 'Lever';
IconLever.variants = 'brandedmono';

export default IconLever;
