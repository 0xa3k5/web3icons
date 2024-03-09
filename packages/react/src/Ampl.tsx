
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAmpl = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.129 14.091c.764 1.82 1.26 2.195 1.798 2.195.097 0 .097.428 0 .428H13.8c-.098 0-.098-.428 0-.428.895 0 1.404-.042.867-1.286l-3.153-7.404-2.615 6.617c-.586 1.531.07 2.073 1.29 2.073.097 0 .097.428 0 .428H6.062c-.082 0-.082-.428 0-.428.878 0 1.346-.318 2.175-2.482l3.564-8.597c.016-.076.26-.095.293 0z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AMPL__a)"><path fill="url(#AMPL__b)" d="M0 0h24v24H0z"/><path fill="#fff" d="M16.129 14.091c.764 1.82 1.26 2.195 1.798 2.195.097 0 .097.428 0 .428H13.8c-.098 0-.098-.428 0-.428.895 0 1.404-.042.867-1.286l-3.153-7.404-2.615 6.617c-.586 1.531.07 2.073 1.29 2.073.097 0 .097.428 0 .428H6.062c-.082 0-.082-.428 0-.428.878 0 1.346-.318 2.175-2.482l3.564-8.597c.016-.076.26-.095.293 0z"/></g><defs><linearGradient id="AMPL__b" x1="4.465" x2="29.206" y1="4.162" y2="32.579" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient><clipPath id="AMPL__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAmpl.displayName = 'Ampl';

export default IconAmpl;
