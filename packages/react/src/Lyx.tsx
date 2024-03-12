
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLyx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m13.247 4.629 4.363 2.575a2.57 2.57 0 0 1 1.247 2.216v5.156a2.57 2.57 0 0 1-1.247 2.215l-4.367 2.58a2.44 2.44 0 0 1-2.495 0l-4.363-2.58a2.57 2.57 0 0 1-1.242-2.215V9.42A2.57 2.57 0 0 1 6.39 7.204l4.363-2.571a2.44 2.44 0 0 1 2.494 0zm.814 9.908 1.243-2.074a.9.9 0 0 0-.008-.926L14.06 9.463A.96.96 0 0 0 13.234 9h-2.473a.96.96 0 0 0-.827.463L8.7 11.537a.9.9 0 0 0 0 .926l1.238 2.074a.96.96 0 0 0 .823.463h2.477a.96.96 0 0 0 .828-.463z"/>
        </>
      ) : (
        <>
          <path fill="#FE005B" d="m13.247 4.629 4.363 2.575a2.57 2.57 0 0 1 1.247 2.216v5.156a2.57 2.57 0 0 1-1.247 2.215l-4.367 2.58a2.44 2.44 0 0 1-2.495 0l-4.363-2.58a2.57 2.57 0 0 1-1.242-2.215V9.42A2.57 2.57 0 0 1 6.39 7.204l4.363-2.571a2.44 2.44 0 0 1 2.494 0zm.814 9.908 1.243-2.074a.9.9 0 0 0-.008-.926L14.06 9.463A.96.96 0 0 0 13.234 9h-2.473a.96.96 0 0 0-.827.463L8.7 11.537a.9.9 0 0 0 0 .926l1.238 2.074a.96.96 0 0 0 .823.463h2.477a.96.96 0 0 0 .828-.463z"/>
        </>
      )}
    </BaseIcon>
));

IconLyx.displayName = 'Lyx';
IconLyx.variants = 'brandedmono';

export default IconLyx;
