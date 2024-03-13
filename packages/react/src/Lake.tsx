
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLake = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <g clipPath="url(#LAKE__a)"><path fill="#1F1F1F" d="M0 0h24v24H0z"/><path fill="#fff" d="M7.286 16.286v2.142a6.429 6.429 0 0 0 0-12.857v2.143A4.265 4.265 0 0 1 11.572 12a4.265 4.265 0 0 1-4.286 4.286"/><path fill="#BDBEC0" d="M13.715 12h-2.143c0 3.536 2.88 6.428 6.428 6.428v-2.142A4.27 4.27 0 0 1 13.715 12"/></g><defs><clipPath id="LAKE__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </BaseIcon>
));

IconLake.displayName = 'Lake';

export default IconLake;
