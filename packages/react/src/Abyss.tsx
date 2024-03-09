
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAbyss = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.01 9.429c-1.222 0-2.153.188-2.153.188v1.954h4.286V9.618c.02 0-.911-.19-2.133-.19"/><path fill="currentColor" d="M12 4.286c-3.13 0-6.857 1.609-6.857 1.609v9.79L12 20.572l6.857-4.866V5.874c.02 0-3.708-1.588-6.857-1.588m3.857 10.347-1.714 1.251v-2.598H9.857v2.597l-1.714-1.25V8.14s2.263-.517 3.877-.517 3.837.517 3.837.517z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ABYSS__a)"><path fill="url(#ABYSS__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M12.01 9.429c-1.222 0-2.153.188-2.153.188v1.954h4.286V9.618c.02 0-.911-.19-2.133-.19"/><path fill="#fff" d="M12 4.286c-3.13 0-6.857 1.609-6.857 1.609v9.79L12 20.572l6.857-4.866V5.874c.02 0-3.708-1.588-6.857-1.588m3.857 10.347-1.714 1.251v-2.598H9.857v2.597l-1.714-1.25V8.14s2.263-.517 3.877-.517 3.837.517 3.837.517z"/></g><defs><linearGradient id="ABYSS__b" x1="3.285" x2="19.82" y1="4.14" y2="20.795" gradientUnits="userSpaceOnUse"><stop stopColor="#A025F3"/><stop offset="1" stopColor="#4212A0"/></linearGradient><clipPath id="ABYSS__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAbyss.displayName = 'Abyss';

export default IconAbyss;
