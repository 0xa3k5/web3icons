
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLyxe = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12 4.286 6.857 3.803v7.822L12 19.714 5.143 15.91V8.09z"/><path fill="currentColor" d="M13.929 8.571h-3.836L8.143 12h3.923z"/><path fill="currentColor" d="m10.12 15.429-1.956-3.43h3.88l1.922 3.43z"/><path fill="currentColor" d="m13.966 15.427-1.924-3.422 1.887-3.434L15.856 12z"/>
        </>
      ) : (
        <>
          <path fill="url(#LYXE__a)" d="m12 4.286 6.857 3.803v7.822L12 19.714 5.143 15.91V8.09z"/><path fill="#fff" d="M13.928 8.571h-3.835L8.143 12h3.922z"/><path fill="#DADBDA" d="m10.12 15.429-1.956-3.43h3.879l1.923 3.43z"/><path fill="#EFEEEE" d="m13.965 15.427-1.923-3.422 1.886-3.434L15.855 12z"/><defs><linearGradient id="LYXE__a" x1="8.998" x2="15.537" y1="6.003" y2="17.864" gradientUnits="userSpaceOnUse"><stop stopColor="#E59F9A"/><stop offset="1" stopColor="#6A3FBA"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLyxe.displayName = 'Lyxe';
IconLyxe.variants = 'brandedmono';

export default IconLyxe;
