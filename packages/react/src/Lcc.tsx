
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLcc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#2AB643" d="m6.454 8.122 2.571-2.979 3.892.819 1.196 3.458 3.548.75 1.196 3.707-2.507 2.979-3.707-.707-2.37 2.708-3.819-.728-1.311-3.797 2.442-2.82-1.131-3.386z"/><path fill="#068210" d="M10.38 9.06 9.227 5.696l3.291.647L13.56 9.61l-2.173 2.396-3.279-.558zm4.735 4.217L13.958 9.91l3.296.651 1.037 3.266-2.173 2.396-3.274-.558zm-6.047 2.088L7.915 12l3.292.652 1.041 3.265-2.173 2.392-3.278-.557z"/><path fill="#fff" d="M9.244 12.485 7.783 8.07 9.904 6.67l1.256 3.591L12.205 9l.399 1.05-1.097 1.329.698 1.894 3.583-2.241.575 1.543-5.829 3.625-.943-2.571-1.007 1.187-.386-1.102z"/>
    </BaseIcon>
));

IconLcc.displayName = 'Lcc';

export default IconLcc;
