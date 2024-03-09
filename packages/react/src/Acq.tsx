
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAcq = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M13.286 12.214v.643H7.714l3.215-5.143 1.714 2.786h-.857L10.929 9 9 12.214z"/><path fill="currentColor" d="M11.143 11.786v-.643h5.571L13.5 16.286 11.786 13.5h.857L13.5 15l1.929-3.214z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ACQ__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="url(#ACQ__b)" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/><path fill="#44B4AC" d="M13.286 12.214v.643H7.714l3.215-5.143 1.714 2.786h-.857L10.929 9 9 12.214z"/><path fill="#44B4AC" d="M11.143 11.786v-.643h5.571L13.5 16.286 11.786 13.5h.857L13.5 15l1.929-3.214z"/></g><defs><linearGradient id="ACQ__b" x1="15.214" x2="8.786" y1="5.572" y2="18.214" gradientUnits="userSpaceOnUse"><stop stopColor="#837DBA"/><stop offset=".5" stopColor="#0F67A3"/><stop offset="1" stopColor="#56BCAF"/></linearGradient><clipPath id="ACQ__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAcq.displayName = 'Acq';

export default IconAcq;
