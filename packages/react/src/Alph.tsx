
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAlph = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.629 5.859a.54.54 0 0 0-.55-.283l-2.54.428c-.215.035-.31.215-.22.407l5.624 11.73c.09.189.338.318.553.283l2.537-.428c.214-.035.308-.215.218-.407zm-.343 8.472c0-.184-.155-.312-.348-.282l-2.3.368a.42.42 0 0 0-.352.394v4.136c0 .184.158.313.351.283l2.302-.369a.42.42 0 0 0 .347-.394zM16.714 5.057c0-.188-.154-.317-.347-.287l-2.306.369a.42.42 0 0 0-.347.394v4.136c0 .184.155.312.348.282l2.305-.368a.42.42 0 0 0 .347-.394V5.053z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ALPH__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="#080515" d="M10.629 5.859a.54.54 0 0 0-.55-.283l-2.54.428c-.215.035-.31.215-.22.407l5.624 11.73c.09.189.338.318.553.283l2.537-.428c.214-.035.308-.215.218-.407zm-.343 8.472c0-.184-.155-.312-.348-.282l-2.3.368a.42.42 0 0 0-.352.394v4.136c0 .184.158.313.351.283l2.302-.369a.42.42 0 0 0 .347-.394z"/><path fill="#E95B4D" d="M16.714 5.057c0-.188-.154-.317-.347-.287l-2.306.369a.42.42 0 0 0-.347.394v4.136c0 .184.154.312.347.282l2.306-.368a.42.42 0 0 0 .347-.394V5.053z"/></g><defs><clipPath id="ALPH__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAlph.displayName = 'Alph';

export default IconAlph;
