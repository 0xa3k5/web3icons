
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEco = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M7.175 16.869q.341.329.728.612A6.78 6.78 0 0 0 10.714 12c0-2.242-1.105-4.23-2.815-5.482a7 7 0 0 0-.724.613A5.8 5.8 0 0 1 9.857 12c0 2.031-1.062 3.819-2.682 4.869"/>
    <path fill="currentColor" d="M17.345 7.701A5.86 5.86 0 0 1 12 11.143 5.86 5.86 0 0 1 6.656 7.7q-.335.414-.6.879A6.86 6.86 0 0 0 12 12a6.86 6.86 0 0 0 5.945-3.42 7 7 0 0 0-.6-.879m-6.63 11.015C10.8 14.99 13.8 12 17.486 12q.705 0 1.371.141-.011.451-.081.896a5.7 5.7 0 0 0-1.419-.18 5.83 5.83 0 0 0-5.39 3.712 5.8 5.8 0 0 0-.395 2.267 6 6 0 0 1-.857-.12"/>
    <path fill="currentColor" d="M17.987 12.377C17.786 15.446 15.107 18 12 18a5 5 0 0 1-.69-.043l-.107.857a6.856 6.856 0 0 0 7.62-6.107L18 12.424l-.013-.051zm-.184-4.037A6.853 6.853 0 0 0 5.143 12c0 2.126.969 4.029 2.486 5.284l.703-.587A6.04 6.04 0 0 1 6 12c0-3.232 2.769-6 6-6a6.09 6.09 0 0 1 5.152 2.991z"/>

    </BaseIcon>
));

IconEco.displayName = 'Eco';

export default IconEco;
