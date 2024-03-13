
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDnxc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#E97E00" d="M5.571 18.429H15v-.857h.857v-.858h.857v-.857h.857V15h.857V9h-.857v-.857h-.857v-.857h-.857v-.857H15v-.857H9v.857h-.857v.857h-.857v.857h-.858V9h-.857z"/><path fill="#FC0" d="M6.428 17.572h7.715v-.858H15v-.857h.857V15h.857v-.857h.857V9.857h-.857V9h-.857v-.857H15v-.857h-.857v-.857H9.857v.857H9v.857h-.857V9h-.857v.857h-.858z"/><path fill="url(#DNXC__a)" d="M5.571 18.429v-2.97h.849v-1.745h.437v-.857h.857v-1.714h.857V9h.857v-.857h.858v-.857h3v.857h.857V9h1.714v.857h.857V12h-2.143v-.857h-1.714V12h.857v.857h.857v.857h.857v.857h-2.571v-.857H12v-.857h-.857v.857h-.857V15H12v.857h.857v.857h-1.714v-.857H9.428v2.572z"/><path fill="#6C6C6C" d="M15 10.286v.857h.857v-.857z"/><path fill="#fff" d="M12 8.572v.857h.857v-.857z"/><defs><linearGradient id="DNXC__a" x1="7.965" x2="21.217" y1="7.802" y2="23.023" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient></defs>
    </BaseIcon>
));

IconDnxc.displayName = 'Dnxc';

export default IconDnxc;
