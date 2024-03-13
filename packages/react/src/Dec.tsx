
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDec = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#DEC__a)" d="M15.642 5.572H8.357L12 12.002z"/><path fill="url(#DEC__b)" d="M15.642 5.572 12 12.002l3.642 6.427 3.643-6.427z"/><path fill="url(#DEC__c)" d="m8.357 5.572-3.643 6.43 3.643 6.427L12 12.002z"/><path fill="#74C5EE" d="M12 12.002 8.357 18.43h7.285z"/><defs><linearGradient id="DEC__a" x1="12" x2="12" y1="18.626" y2="4.979" gradientUnits="userSpaceOnUse"><stop stopColor="#74C5EE"/><stop offset=".32" stopColor="#73C2EF"/><stop offset=".53" stopColor="#6EB9F1"/><stop offset=".72" stopColor="#66AAF5"/><stop offset=".88" stopColor="#5A95FA"/><stop offset="1" stopColor="#4F80FF"/></linearGradient><linearGradient id="DEC__b" x1="4.698" x2="19.479" y1="12.002" y2="12.002" gradientUnits="userSpaceOnUse"><stop stopColor="#96D4C8"/><stop offset="1" stopColor="#42C0C6"/></linearGradient><linearGradient id="DEC__c" x1="4.714" x2="19.285" y1="12.002" y2="12.002" gradientUnits="userSpaceOnUse"><stop stopColor="#4F80FF"/><stop offset=".28" stopColor="#4E7FFC"/><stop offset=".48" stopColor="#4A7CF3"/><stop offset=".64" stopColor="#4477E4"/><stop offset=".79" stopColor="#3C6FCE"/><stop offset=".93" stopColor="#3166B3"/><stop offset="1" stopColor="#2B60A3"/></linearGradient></defs>
    </BaseIcon>
));

IconDec.displayName = 'Dec';

export default IconDec;
