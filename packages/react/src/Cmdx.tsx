
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCmdx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.571 6.184v1.53h1.282v-.857h6.291L14.76 8.143H6.18c-.343 0-.609.201-.609.54v8.7c0 .343.266.617.609.617h8.97l3.103-2.858c.364-.335.124-.999-.377-.999H9.853V9.857H8.567v4.963c0 .343.146.609.489.609H16.2l-1.453 1.285h-7.89V9.43h8.293l3.103-2.915c.364-.334.124-.942-.377-.942h-8.82c-.343 0-.489.274-.489.612z"/>
        </>
      ) : (
        <>
          <path fill="#FF424E" d="M8.571 6.184v1.53h1.282v-.857h6.291L14.76 8.143H6.18c-.343 0-.609.201-.609.54v8.7c0 .343.266.617.609.617h8.97l3.103-2.858c.364-.335.124-.999-.377-.999H9.853V9.857H8.567v4.963c0 .343.146.609.489.609H16.2l-1.453 1.285h-7.89V9.43h8.293l3.103-2.915c.364-.334.124-.942-.377-.942h-8.82c-.343 0-.489.274-.489.612z"/>
        </>
      )}
    </BaseIcon>
));

IconCmdx.displayName = 'Cmdx';

export default IconCmdx;
