
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRif = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.429 5.571h1.285v4.715h-1.286zm2.142 2.143h1.286v3.857h-1.286zm2.143 2.572H18v1.285h-1.286zm1.715 0h1.285v1.285H18.43zm0 2.143v1.285h-4.715v-1.286zm-2.143 2.142v1.286h-3.858v-1.286zm-2.572 2.143V18h-1.286v-1.286zm0 1.715v1.285h-1.286V18.43zm-2.143 0h-1.285v-4.715h1.285zM9.43 16.285H8.143v-3.858h1.285zm-2.143-2.572H6v-1.286h1.286zm-1.715 0H4.286v-1.286H5.57zm0-2.143v-1.285h4.715v1.285zm2.142-2.14V8.143h3.857v1.285zm2.572-2.143V6h1.285v1.286zm0-1.715V4.286h1.285V5.57z"/>

        </>
      ) : (
        <>
          
    <path fill="#149DD9" d="M12.429 5.571h1.286v4.715h-1.286zm2.143 2.143h1.286v3.857h-1.286zm2.143 2.572H18v1.285h-1.285zm1.714 0h1.286v1.285h-1.286zm0 2.143v1.285h-4.714v-1.286zm-2.143 2.142v1.286H12.43v-1.286zm-2.571 2.143V18h-1.286v-1.286zm0 1.715v1.285h-1.286V18.43zm-2.143 0h-1.286v-4.715h1.286zm-2.143-2.143H8.143v-3.858H9.43zm-2.143-2.572H6v-1.286h1.286zm-1.714 0H4.286v-1.286h1.286zm0-2.143v-1.285h4.714v1.285zM7.715 9.43V8.143h3.857v1.285zm2.571-2.143V6h1.286v1.286zm0-1.715V4.286h1.286V5.57z"/>

        </>
      )}
    </BaseIcon>
));

IconRif.displayName = 'Rif';

export default IconRif;
