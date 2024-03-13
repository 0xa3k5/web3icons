
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMars4 = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m10.003 5.143-4.166 7.269c-.19.33-.282.707-.265 1.088.021.973.651 1.933 1.723 1.933h7.277v3h2.571v-3.857a1.714 1.714 0 0 0-1.714-1.714H8.516l4.457-7.715h-2.97z"/>
        </>
      ) : (
        <>
          <path fill="#CF2437" d="m10.003 5.143-4.166 7.269c-.19.33-.282.707-.266 1.088.022.973.652 1.933 1.723 1.933h7.277v3h2.572v-3.857a1.714 1.714 0 0 0-1.715-1.714H8.515l4.458-7.715h-2.97z"/>
        </>
      )}
    </BaseIcon>
));

IconMars4.displayName = 'Mars4';

export default IconMars4;
