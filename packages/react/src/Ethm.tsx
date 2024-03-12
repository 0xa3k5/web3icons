
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEthm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 7.929 6.857 10.86 12 3.857zM12 7.929l5.143 2.931L12 3.857zM12 9.056l-5.143 2.957L12 14.199z"/><path fill="currentColor" d="m12 20.143-5.143-8.151L12 14.147zm0-11.087 5.143 2.953L12 14.194z"/><path fill="currentColor" d="m12 20.143 5.143-8.151L12 14.147z"/>
        </>
      ) : (
        <>
          <path fill="#44A47F" d="M12 7.929 6.857 10.86 12 3.857z"/><path fill="#66AA91" d="m12 7.929 5.143 2.931L12 3.857z"/><path fill="#2A9E77" d="m12 9.056-5.143 2.957L12 14.199z"/><path fill="#44A47F" d="m12 20.143-5.143-8.151L12 14.147zm0-11.087 5.143 2.953L12 14.194z"/><path fill="#66AA91" d="m12 20.143 5.143-8.151L12 14.147z"/>
        </>
      )}
    </BaseIcon>
));

IconEthm.displayName = 'Ethm';
IconEthm.variants = 'brandedmono';

export default IconEthm;
