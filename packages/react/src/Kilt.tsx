
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKilt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.571 5.143h2.572v8.229L10.5 12l.643 3.407v3.45H8.57z"/><path fill="currentColor" d="M14.083 5.143h2.631l-3.368 6h-2.632zm-.227 13.714h2.858L13.042 12h-2.756zm-7.029-7.714h9.489c.223 0 .398.197.398.429 0 .24-.184.428-.398.428H6.827c-.223 0-.398-.197-.398-.428 0-.232.184-.429.398-.429"/>
        </>
      ) : (
        <>
          <path fill="#8C175B" d="M8.571 5.143h2.572v8.229L10.5 12l.643 3.407v3.45H8.57z"/><path fill="#8C175B" d="M14.083 5.143h2.631l-3.368 6h-2.632zm-.227 13.714h2.858L13.042 12h-2.756zm-7.029-7.714h9.489c.223 0 .398.197.398.429 0 .24-.184.428-.398.428H6.827c-.223 0-.398-.197-.398-.428 0-.232.184-.429.398-.429"/>
        </>
      )}
    </BaseIcon>
));

IconKilt.displayName = 'Kilt';
IconKilt.variants = 'brandedmono';

export default IconKilt;
