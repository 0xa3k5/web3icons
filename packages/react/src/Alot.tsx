
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAlot = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m19.714 10.106-3.488 2.288c2.751-2.228 2.751-4.641 2.751-4.641l-3.647 3.66c2.456-4.136 1.556-5.841 1.556-5.841l-2.906 4.984a7.2 7.2 0 0 0-1.954-.266h-.047c-.66 0-1.316.086-1.955.266l-2.91-4.984s-1.02 1.564 1.436 5.7L5.027 7.756s-.36 2.135 2.58 4.505c-.017.025-3.325-2.156-3.325-2.156s-.086 2.057 2.828 3.703v.055c0 2.229 2.173 4.543 4.869 4.565h.043c2.69-.026 4.868-2.332 4.868-4.565v-.055c2.91-1.646 2.824-3.703 2.824-3.703m-9.36 6s-.861.06-1.358-.463c-.497-.519-.437-1.423-.437-1.423s.865-.06 1.363.463c.497.523.432 1.427.432 1.427zm4.655-.463c-.498.523-1.359.467-1.359.467s-.056-.904.441-1.427c.498-.523 1.36-.463 1.36-.463s.05.9-.45 1.423z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ALOT__a)"><path fill="url(#ALOT__b)" d="M0 0h24v24H0z"/><path fill="url(#ALOT__c)" d="m19.714 10.106-3.488 2.288c2.751-2.228 2.751-4.641 2.751-4.641l-3.647 3.66c2.456-4.136 1.556-5.841 1.556-5.841l-2.906 4.984a7.2 7.2 0 0 0-1.954-.266h-.047c-.66 0-1.316.086-1.955.266l-2.91-4.984s-1.02 1.564 1.436 5.7L5.027 7.756s-.36 2.135 2.58 4.505c-.017.025-3.325-2.156-3.325-2.156s-.086 2.057 2.828 3.703v.055c0 2.229 2.173 4.543 4.869 4.565h.043c2.69-.026 4.868-2.332 4.868-4.565v-.055c2.91-1.646 2.824-3.703 2.824-3.703m-9.36 6s-.861.06-1.358-.463c-.497-.519-.437-1.423-.437-1.423s.865-.06 1.363.463c.497.523.432 1.427.432 1.427zm4.655-.463c-.498.523-1.359.467-1.359.467s-.056-.904.441-1.427c.498-.523 1.36-.463 1.36-.463s.05.9-.45 1.423z"/></g><defs><linearGradient id="ALOT__b" x1="4.466" x2="29.207" y1="4.161" y2="32.58" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><linearGradient id="ALOT__c" x1="7.62" x2="17.173" y1="15.446" y2="5.297" gradientUnits="userSpaceOnUse"><stop stopColor="#EB1357"/><stop offset="1" stopColor="#DB23C8"/></linearGradient><clipPath id="ALOT__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAlot.displayName = 'Alot';

export default IconAlot;
