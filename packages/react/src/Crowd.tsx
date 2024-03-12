
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCrowd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.246 13.187c-.484-.146-.999.193-1.363.549-.609.591-1.684.835-2.597.835A2.572 2.572 0 1 1 9.557 10.8c.186-.42.502-.768.9-.994a3.853 3.853 0 1 0-3.171 6.051c1.838 0 3.9-.848 4.286-2.571zM12.9 13.157l.386.129.347.068a1.2 1.2 0 0 0-.729-.197zm1.269.626c-.249.197-.716.343-1.372.356.763 1.148 2.413 1.718 3.917 1.718a3.858 3.858 0 0 0 0-7.714c-1.315 0-2.948 1.136-3.642 2.143-.215.643.214 1.071.428 1.285.429-.814 2.229-2.142 3.214-2.142a2.572 2.572 0 0 1 0 5.142c-.887 0-1.928-.231-2.545-.788"/><path fill="currentColor" d="M10.714 12a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M13.286 13.714a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"/>
        </>
      ) : (
        <>
          <path fill="url(#CROWD__a)" d="M11.246 13.187c-.484-.146-.999.193-1.363.549-.609.591-1.684.835-2.597.835A2.572 2.572 0 1 1 9.557 10.8c.186-.42.502-.768.9-.994a3.853 3.853 0 1 0-3.171 6.051c1.838 0 3.9-.848 4.286-2.571z"/><path fill="url(#CROWD__b)" d="m12.9 13.157.386.129.347.068a1.2 1.2 0 0 0-.729-.197zm1.269.626c-.249.197-.716.343-1.372.356.763 1.148 2.413 1.718 3.917 1.718a3.858 3.858 0 0 0 0-7.714c-1.315 0-2.948 1.136-3.642 2.143-.215.643.214 1.071.428 1.285.429-.814 2.229-2.142 3.214-2.142a2.572 2.572 0 0 1 0 5.142c-.887 0-1.928-.231-2.545-.788"/><path fill="#0B9ED9" d="M10.714 12a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714M13.286 13.714a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"/><defs><linearGradient id="CROWD__a" x1="5.222" x2="12.609" y1="10.494" y2="19.304" gradientUnits="userSpaceOnUse"><stop stopColor="#1CD875"/><stop offset="1" stopColor="#17C693"/></linearGradient><linearGradient id="CROWD__b" x1="6.954" x2="10.914" y1="10.071" y2="17.995" gradientUnits="userSpaceOnUse"><stop stopColor="#16C399"/><stop offset="1" stopColor="#0FADBE"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconCrowd.displayName = 'Crowd';
IconCrowd.variants = 'brandedmono';

export default IconCrowd;
