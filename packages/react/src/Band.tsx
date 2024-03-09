
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBand = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.714 16.543 12 18.857l-4.714-2.314V7.444L12 5.143l2.571 1.646v3.818l-1.285-.771V7.47L12 6.789 8.57 8.387V15.6L12 17.263l3.428-1.663v-2.957l-4.714-2.469 1.337-.72 4.663 2.542zm-3.938-4.83 1.521.75-3.583 1.628v-3.578L12 11.24v1.072z"/>
        </>
      ) : (
        <>
          <g clipPath="url(#BAND__a)"><path fill="#516FFA" d="M0 0h24v24H0z"/><path fill="#fff" d="M16.714 16.543 12 18.857l-4.714-2.314V7.444L12 5.143l2.571 1.646v3.818l-1.285-.771V7.47L12 6.789 8.57 8.387V15.6L12 17.263l3.428-1.663v-2.957l-4.714-2.469 1.337-.72 4.663 2.542zm-3.938-4.83 1.521.75-3.583 1.628v-3.578L12 11.24v1.072z"/></g><defs><clipPath id="BAND__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconBand.displayName = 'Band';

export default IconBand;
