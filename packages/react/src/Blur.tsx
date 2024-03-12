
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBlur = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.813 5.572H6v6h4.813A2.19 2.19 0 0 0 12 9.729c0-.54-.33-1.016-.493-1.187.394-.249.493-.875.493-1.158 0-.882-.493-1.5-1.187-1.812M7.286 6.857h2.785a.643.643 0 0 1 0 1.286H7.286zM10.07 9H7.286v1.286h2.785a.643.643 0 1 0 0-1.286" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M12.857 10.269V5.572h1.286v4.131l.514.583h3.772v1.286h-4.333zM6 17.096v-4.667h1.286v4.14l.557.574h2.374l.497-.574v-4.14H12v4.667l-1.183 1.333H7.24zm6.857-4.667h4.479c.493.192 1.093 1.024 1.093 1.667 0 .763-.378 1.105-.57 1.277l-.03.03c.201.128.6.531.6 1.11v1.916h-1.286V16.65c-.026-.201-.274-.728-.694-.793h-2.306v2.572h-1.286zm3.429.857h-2.143V15h2.143a.857.857 0 1 0 0-1.714"/>
        </>
      ) : (
        <>
          <path fill="#FD6E26" d="M10.813 5.572H6v6h4.813A2.19 2.19 0 0 0 12 9.729c0-.54-.33-1.016-.493-1.187.394-.249.493-.875.493-1.158 0-.882-.493-1.5-1.187-1.812M7.286 6.857h2.785a.643.643 0 0 1 0 1.286H7.286zM10.07 9H7.286v1.286h2.785a.643.643 0 1 0 0-1.286" fillRule="evenodd" clipRule="evenodd"/><path fill="#FD6E26" d="M12.857 10.269V5.572h1.286v4.131l.514.583h3.772v1.286h-4.333zM6 17.096v-4.667h1.286v4.14l.557.574h2.374l.497-.574v-4.14H12v4.667l-1.183 1.333H7.24zm6.857-4.667h4.479c.493.192 1.093 1.024 1.093 1.667 0 .763-.378 1.105-.57 1.277l-.03.03c.201.128.6.531.6 1.11v1.916h-1.286V16.65c-.026-.201-.274-.728-.694-.793h-2.306v2.572h-1.286zm3.429.857h-2.143V15h2.143a.857.857 0 1 0 0-1.714"/>
        </>
      )}
    </BaseIcon>
));

IconBlur.displayName = 'Blur';
IconBlur.variants = 'brandedmono';

export default IconBlur;
