
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLcd = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#4747F3" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"/>
    <path fill="#7C7CF4" d="M12 19.012a7.011 7.011 0 1 0 0-14.023 7.011 7.011 0 0 0 0 14.023"/>
    <path fill="#A2A2F8" d="M12 18.707a6.707 6.707 0 1 0 0-13.414 6.707 6.707 0 0 0 0 13.414"/>
    <path fill="#C4C5FB" d="M12 18.352a6.351 6.351 0 1 0 0-12.703 6.351 6.351 0 0 0 0 12.703"/>
    <path fill="#E0E0FC" d="M12 17.936a5.936 5.936 0 1 0 0-11.872 5.936 5.936 0 0 0 0 11.872"/>
    <path fill="#F0F3FA" d="M12 17.267a5.267 5.267 0 1 0 0-10.534 5.267 5.267 0 0 0 0 10.534"/>
    <path fill="#2A28F5" d="M9.857 12.099V15h4.285v-1.286h-2.571V12.58a8 8 0 0 1-1.714-.48m0-1.17c.42.158 1.114.398 1.714.548V8.572H9.857z"/>

    </BaseIcon>
));

IconLcd.displayName = 'Lcd';

export default IconLcd;
