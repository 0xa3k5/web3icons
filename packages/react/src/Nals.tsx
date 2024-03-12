
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNals = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.921 6h2.936v1.714H7.286v3.926l-.429.3v.471l.429.279v3.596h2.571V18H6.921l-1.35-1.714v-3.429H4.286v-1.714H5.57V7.714zm10.157 0h-2.935v1.714h2.571v3.926l.429.3v.471l-.429.279v3.596h-2.571V18h2.935l1.35-1.714v-3.429h1.286v-1.714H18.43V7.714zm-5.507 4.26c.206-.193.472-.403.995-.403.912 0 1.577.844 1.577 1.723v2.563h-1.286V11.48c-.034-.248-.15-.767-.574-.767-.304 0-.712.429-.712.677v2.752h-1.285V9.857h1.285z"/>
        </>
      ) : (
        <>
          <path fill="#FEFEFE" d="M6.922 6h2.936v1.714H7.286v3.926l-.428.3v.471l.428.279v3.596h2.572V18H6.922l-1.35-1.714v-3.429H4.286v-1.714h1.286V7.714zm10.157 0h-2.936v1.714h2.572v3.926l.428.3v.471l-.428.279v3.596h-2.572V18h2.936l1.35-1.714v-3.429h1.286v-1.714h-1.286V7.714zm-5.507 4.26c.206-.193.471-.403.994-.403.913 0 1.577.844 1.577 1.723v2.563h-1.285V11.48c-.035-.248-.15-.767-.575-.767-.304 0-.711.429-.711.677v2.752h-1.286V9.857h1.286z"/>
        </>
      )}
    </BaseIcon>
));

IconNals.displayName = 'Nals';
IconNals.variants = 'brandedmono';

export default IconNals;
