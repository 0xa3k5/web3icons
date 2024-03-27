
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTxau = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.857 12a6.857 6.857 0 1 1-13.714 0 6.857 6.857 0 0 1 13.714 0m.429 0a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-6.857 3.857V15h-.857c-1.03 0-1.286-.857-1.286-1.286V9.857c0-.685.857-.857 1.286-.857h.857c1.028 0 1.285.857 1.285 1.286v.428H15v-.857c0-1.371-1.714-1.714-2.571-1.714h-.857C9.514 8.143 9 9.287 9 9.857v3.857c0 1.715 1.714 2.143 2.572 2.143zM15 12h-3v.857h1.714v3H15z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#E3BA4F" d="M18.857 12a6.857 6.857 0 1 1-13.714 0 6.857 6.857 0 0 1 13.714 0m.428 0a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-6.857 3.857V15h-.857c-1.029 0-1.286-.857-1.286-1.286V9.857c0-.685.857-.857 1.286-.857h.857c1.029 0 1.286.857 1.286 1.286v.428H15v-.857c0-1.371-1.715-1.714-2.572-1.714h-.857C9.514 8.143 9 9.287 9 9.857v3.857c0 1.715 1.714 2.143 2.571 2.143zM15 12h-3v.857h1.714v3H15z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconTxau.displayName = 'Txau';

export default IconTxau;
