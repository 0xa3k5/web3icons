
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAin = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.572 4.714v4.222l-2.645 3.921H5.572v-.428l5.571-7.715zm.428 0v4.217l2.816 3.926h3.613v-.428l-6-7.715zm6.429 8.572h-3.305l3.073 4.286h.232zm-.759 4.286-3.073-4.286H9.154l-2.888 4.286zm-11.918 0 2.888-4.286H5.572v4.286zm3.694-4.715 2.344-3.48 2.499 3.48z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AIN__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="#663FBC" d="M11.572 4.714v4.222l-2.645 3.921H5.572v-.428l5.571-7.715zm.428 0v4.217l2.816 3.926h3.613v-.428l-6-7.715zm6.429 8.572h-3.305l3.073 4.286h.232zm-.759 4.286-3.073-4.286H9.154l-2.888 4.286zm-11.918 0 2.888-4.286H5.572v4.286zm3.694-4.715 2.344-3.48 2.499 3.48z"/></g><defs><clipPath id="AIN__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAin.displayName = 'Ain';

export default IconAin;
