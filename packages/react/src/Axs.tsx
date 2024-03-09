
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAxs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.263 7.556c.497-.639 4.213 1.393 6.103 3.15a.21.21 0 0 1-.013.317l-.6.501a.215.215 0 0 1-.262.009l-1.234-.887-1.474 1.568c-.146.15-.407.467-.587.339a.81.81 0 0 1-.223-.921c.231-.536 1.461-1.66 1.461-1.66-.617-.492-1.885-.955-2.108.614-.146 1.02-.112 5.207 1.671 4.2 1.714-.973 8.55-8.546 9.917-7.886 1.367.656 1.843 7.886.819 9.197-.334.429-2.563.154-6.107-2.837a.22.22 0 0 1-.06-.24.2.2 0 0 1 .047-.073l.6-.587a.215.215 0 0 1 .3-.004c.806.703 3.741 2.957 4.058 1.444.21-1.011.232-5.498-.792-5.168-.558.18-1.543.977-2.28 1.607-1.599 1.371-7.243 7.572-8.555 6.844-1.311-.724-1.628-8.314-.685-9.527z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AXS__a)"><path fill="url(#AXS__b)" d="M0 0h24v24H0z"/><path fill="url(#AXS__c)" d="M0 0h24v24H0z"/><path fill="#fff" d="M5.263 7.556c.497-.639 4.213 1.393 6.103 3.15a.21.21 0 0 1-.013.317l-.6.501a.215.215 0 0 1-.262.009l-1.234-.887-1.474 1.568c-.146.15-.407.467-.587.339a.81.81 0 0 1-.223-.921c.231-.536 1.461-1.66 1.461-1.66-.617-.492-1.885-.955-2.108.614-.146 1.02-.112 5.207 1.671 4.2 1.714-.973 8.55-8.546 9.917-7.886 1.367.656 1.843 7.886.819 9.197-.334.429-2.563.154-6.107-2.837a.22.22 0 0 1-.06-.24.2.2 0 0 1 .047-.073l.6-.587a.215.215 0 0 1 .3-.004c.806.703 3.741 2.957 4.058 1.444.21-1.011.232-5.498-.792-5.168-.558.18-1.543.977-2.28 1.607-1.599 1.371-7.243 7.572-8.555 6.844-1.311-.724-1.628-8.314-.685-9.527z"/></g><defs><linearGradient id="AXS__b" x1="12" x2="12" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00D2F7"/><stop offset="1" stopColor="#004CDC"/></linearGradient><linearGradient id="AXS__c" x1="24" x2="0" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#8476F4"/><stop offset=".48" stopColor="#0083EC" stopOpacity="0"/><stop offset="1" stopColor="#8763EF"/></linearGradient><clipPath id="AXS__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAxs.displayName = 'Axs';

export default IconAxs;
