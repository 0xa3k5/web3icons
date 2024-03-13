
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNsbt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.715 12 12 4.286 4.286 12 12 19.714zm-9.857 3.428H9v-3H7.286v-.857H9v-3h.858l4.285 5.383V8.571H15v3h1.715v.857H15v3h-.857l-4.285-5.352v5.352" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M9.858 15.428H9v-3H7.286v-.857H9v-.766a3.7 3.7 0 0 0-.767-.09C6.305 10.714 4.286 12 4.286 12L12 19.714l7.693-7.688c-.257.146-1.753.831-3.981.831q-.348-.001-.712-.053v2.624h-.857l-3.178-3.969a21 21 0 0 0-1.107-.414z"/><path fill="currentColor" d="m12.713 12.157 1.43 1.797v-1.327a15 15 0 0 1-1.43-.47"/>
        </>
      ) : (
        <>
          <path fill="#6A53F3" d="M19.715 12 12 4.286 4.286 12 12 19.714zm-9.857 3.428H9v-3H7.286v-.857H9v-3h.858l4.285 5.383V8.571H15v3h1.715v.857H15v3h-.857l-4.285-5.352v5.352" fillRule="evenodd" clipRule="evenodd"/><path fill="#5428DB" d="M9.858 15.428H9v-3H7.286v-.857H9v-.766a3.7 3.7 0 0 0-.767-.09C6.305 10.714 4.286 12 4.286 12L12 19.714l7.693-7.688c-.257.146-1.753.831-3.981.831q-.348-.001-.712-.053v2.624h-.857l-3.178-3.969a21 21 0 0 0-1.107-.414z"/><path fill="#5428DB" d="m12.713 12.157 1.43 1.797v-1.327a15 15 0 0 1-1.43-.47"/>
        </>
      )}
    </BaseIcon>
));

IconNsbt.displayName = 'Nsbt';

export default IconNsbt;
