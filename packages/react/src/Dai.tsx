
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDai = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.403 6H7.286v3.857H6v1.714h1.286v.858H6v1.714h1.286V18h5.117a6.03 6.03 0 0 0 5.631-3.857h1.252v-1.714h-.875a6 6 0 0 0 0-.858h.875V9.857h-1.252A6.04 6.04 0 0 0 12.403 6m4.286 6.429a4.2 4.2 0 0 0 0-.858H9v.858h7.693zM9 14.143v2.143h3.309a4.42 4.42 0 0 0 3.814-2.143zm0-4.286h7.127a4.43 4.43 0 0 0-3.814-2.143H9z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#FDC134" d="M12.403 6H7.286v3.857H6v1.714h1.286v.858H6v1.714h1.286V18h5.117a6.03 6.03 0 0 0 5.631-3.857h1.252v-1.714h-.875a6 6 0 0 0 0-.858h.875V9.857h-1.252A6.04 6.04 0 0 0 12.403 6m4.286 6.429a4.2 4.2 0 0 0 0-.858H9v.858h7.693zM9 14.143v2.143h3.309a4.42 4.42 0 0 0 3.814-2.143zm0-4.286h7.127a4.43 4.43 0 0 0-3.814-2.143H9z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconDai.displayName = 'Dai';
IconDai.variants = 'brandedmono';

export default IconDai;
