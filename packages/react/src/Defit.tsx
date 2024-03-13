
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDefit = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M14.16 7.714h-1.38l.364-1.286h-1.393l-.415 1.286h-5.97L6.463 9.27l-2.177 7.016h4.367l-.416 1.285H9.69l.364-1.285h1.423l-.411 1.285h1.448l.369-1.285h3.501a1.94 1.94 0 0 0 1.847-1.363l1.865-5.945a.973.973 0 0 0-.922-1.264H15.6l.364-1.286h-1.393l-.415 1.286zm-.013 6.429 1.371-4.286h-5.357l-.411 1.286h1.864l-.454 1.285H9.334l-.548 1.715z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#037CFF" d="M14.16 7.714h-1.38l.365-1.286h-1.393l-.416 1.286h-5.97L6.463 9.27l-2.177 7.016h4.367l-.415 1.285H9.69l.365-1.285h1.423l-.412 1.285h1.449l.368-1.285h3.502a1.94 1.94 0 0 0 1.847-1.363l1.864-5.945a.973.973 0 0 0-.921-1.264H15.6l.365-1.286h-1.393l-.416 1.286zm-.012 6.429 1.371-4.286h-5.357l-.412 1.286h1.865l-.455 1.285H9.335l-.549 1.715z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconDefit.displayName = 'Defit';

export default IconDefit;
