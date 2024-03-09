
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconApw = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.786 18.857v-.968l-1.937-1.603H6.68l1.09-1.715-.914-.754v-3.634l4.929-3.857V5.143a6.857 6.857 0 0 0 0 13.706zM18.857 12a6.857 6.857 0 0 1-6.643 6.857v-.985l1.586-1.586h3.506l-.999-1.693.836-.549v-3.861l-4.929-3.857V5.143A6.857 6.857 0 0 1 18.857 12m.429 0a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0M7.462 15.857l.642-1.011 1.226 1.011H7.457zm5.734.429-.982.985v-.985h.986zm3.356-.429h-4.338V14.04L9.55 11.953l2.443-3.827zm-4.543-8.554L9.21 11.687l-1.796-1.401L12 6.699l4.577 3.587-1.941 1.478-2.627-4.457zm-4.723 6.309v-2.885l4.5 3.519v3.085zm7.568-1.483 1.86-1.415v3.099l-.625.411z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <g clipPath="url(#APW__a)"><path fill="url(#APW__b)" d="M0 0h24v24H0z"/><path fill="#FEC093" d="M11.786 18.857v-.968l-1.937-1.603H6.68l1.09-1.715-.914-.754v-3.634l4.929-3.857V5.143a6.857 6.857 0 0 0 0 13.706zM18.857 12a6.857 6.857 0 0 1-6.643 6.857v-.985l1.586-1.586h3.506l-.999-1.693.836-.549v-3.861l-4.929-3.857V5.143A6.857 6.857 0 0 1 18.857 12m.429 0a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0M7.462 15.857l.642-1.011 1.226 1.011H7.457zm5.734.429-.982.985v-.985h.986zm3.356-.429h-4.338V14.04L9.55 11.953l2.443-3.827zm-4.543-8.554L9.21 11.687l-1.796-1.401L12 6.699l4.577 3.587-1.941 1.478-2.627-4.457zm-4.723 6.309v-2.885l4.5 3.519v3.085zm7.568-1.483 1.86-1.415v3.099l-.625.411z" fillRule="evenodd" clipRule="evenodd"/></g><defs><linearGradient id="APW__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="APW__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconApw.displayName = 'Apw';

export default IconApw;
