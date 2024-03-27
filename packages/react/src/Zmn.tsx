
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZmn = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#ZMN__a)" d="M11.846 4.714h.356c1.873.086 3.467.737 4.783 1.972q2.056 1.929 2.3 4.843v.977a7.16 7.16 0 0 1-1.816 4.316A7.29 7.29 0 1 1 6.806 6.9q2.031-2.064 5.04-2.186"/>
    <path fill="url(#ZMN__b)" d="M18.686 12.004A6.67 6.67 0 0 1 12 18.682a6.685 6.685 0 0 1-4.714-11.4 6.686 6.686 0 0 1 11.4 4.722"/>
    <path fill="url(#ZMN__c)" d="M7.106 8.576a6.07 6.07 0 0 1 6.12.021.1.1 0 0 0 .043-.017l2.168-1.513q.045-.027 0-.056a6.107 6.107 0 0 0-8.562 1.685l.02.021q.015.013.022 0a.8.8 0 0 1 .189-.141M15.9 7.419l-9.565 6.613c-.03.017-.035.042-.026.072q.216.578.548 1.098a.06.06 0 0 0 .043.008l.017-.009 9.862-6.844a.06.06 0 0 0 .026-.064 6.5 6.5 0 0 0-.823-.87.064.064 0 0 0-.082-.004m1.762 2.55-9.557 6.63a.05.05 0 0 1-.065-.005 8 8 0 0 1-.84-.874q-.03-.033.005-.06l9.887-6.848a.06.06 0 0 1 .064 0q.012.002.017.017.309.487.514 1.058a.04.04 0 0 1 0 .043.1.1 0 0 1-.025.043zm-.583 5.344a6.34 6.34 0 0 1-2.945.913 6.03 6.03 0 0 1-3.3-.797.06.06 0 0 0-.068.004l-2.186 1.53a.03.03 0 0 0-.013.021.03.03 0 0 0 .013.022 6.103 6.103 0 0 0 8.525-1.667c.03-.043.02-.056-.026-.026"/>
    <defs>
        <linearGradient id="ZMN__a" x1="4.715" x2="19.012" y1="12.382" y2="12.274" gradientUnits="userSpaceOnUse">
            <stop stopColor="#929595"/>
            <stop offset=".49" stopColor="#F2F1EE"/>
            <stop offset="1" stopColor="#949797"/>
        </linearGradient>
        <linearGradient id="ZMN__b" x1="5.227" x2="18.631" y1="11.394" y2="11.277" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15191B"/>
            <stop offset=".51" stopColor="#373A3C"/>
            <stop offset="1" stopColor="#181C1E"/>
        </linearGradient>
        <linearGradient id="ZMN__c" x1="6.596" x2="17.229" y1="12.759" y2="11.083" gradientUnits="userSpaceOnUse">
            <stop stopColor="#959797"/>
            <stop offset=".5" stopColor="#EDEDEB"/>
            <stop offset="1" stopColor="#989A9A"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconZmn.displayName = 'Zmn';

export default IconZmn;
