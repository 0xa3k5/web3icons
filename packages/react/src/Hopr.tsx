
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHopr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.581 18c.129-3.814.056-9.857-.295-13.286H9.51l.291 5.289c.652-.951 2.272-2.507 4.029-2.126 1.753.386 2.228 1.286 2.897 3.275.57 1.7.429 5.13.291 6.848h-2.232c.587-5.794-.369-9.098-2.366-7.53-2.207 1.731-2.524 5.306-2.614 7.53H7.577z"/>
        </>
      ) : (
        <>
          <path fill="#FFFF9F" d="M7.582 18c.128-3.814.056-9.857-.296-13.286H9.51l.292 5.289c.651-.951 2.271-2.507 4.028-2.126 1.753.386 2.229 1.286 2.898 3.275.57 1.7.428 5.13.291 6.848h-2.233c.587-5.794-.368-9.098-2.366-7.53-2.207 1.731-2.524 5.306-2.614 7.53H7.578z"/>
        </>
      )}
    </BaseIcon>
));

IconHopr.displayName = 'Hopr';
IconHopr.variants = 'brandedmono';

export default IconHopr;
