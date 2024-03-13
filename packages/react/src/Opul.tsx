
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOpul = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="currentColor" d="M9.857 10.822v2.357L12 14.357l2.143-1.178v-2.357L12 9.642z"/><path fill="currentColor" d="M5.571 8.357v7.286l2.143 1.213V9.643L12 7.286l4.286 2.357v4.714L12 16.714l-3-1.65v2.52l3 1.702 6.428-3.643V8.357L12 4.714z"/>
    </BaseIcon>
));

IconOpul.displayName = 'Opul';

export default IconOpul;
