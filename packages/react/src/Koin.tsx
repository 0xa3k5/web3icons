
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKoin = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 5.126 6 8.563v6.874l6 3.437 6-3.437V8.563zm6.857 3.017L12 4.286 5.143 8.143v7.714L12 19.714l6.857-3.857z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="m12 9.428-2.143 1.265v2.614L12 14.571l2.143-1.264v-2.614zm3 .858L12 8.57l-3 1.715v3.428l3 1.714 3-1.714z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M11.571 12.172 5.366 8.679l.373-.635L12 11.572l6.111-3.523.373.625-6.055 3.498v6.998h-.858z"/>

        </>
      ) : (
        <>
          
    <path fill="#6F00F6" d="M12 5.126 6 8.563v6.874l6 3.437 6-3.437V8.563zm6.857 3.017L12 4.286 5.143 8.143v7.714L12 19.714l6.857-3.857z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#6F00F6" d="m12 9.428-2.143 1.265v2.614L12 14.571l2.143-1.264v-2.614zm3 .858L12 8.57l-3 1.715v3.428l3 1.714 3-1.714z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#6F00F6" d="M11.57 12.172 5.366 8.679l.373-.635L12 11.572l6.112-3.523.373.625-6.056 3.498v6.998h-.857z"/>

        </>
      )}
    </BaseIcon>
));

IconKoin.displayName = 'Koin';

export default IconKoin;
