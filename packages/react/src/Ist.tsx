
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconIst = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.714 8.01c0 2.529-2.108 4.582-4.714 4.582a4.74 4.74 0 0 1-2.327-.6l.784-1.042c.463.223.986.352 1.543.352 1.894 0 3.428-1.475 3.428-3.296 0-1.817-1.534-3.292-3.428-3.292S8.57 6.19 8.57 8.006c0 .433.086.848.245 1.226l-1.059.775c-.3-.6-.471-1.281-.471-1.997C7.286 5.482 9.394 3.43 12 3.43s4.714 2.053 4.714 4.581"/>
    <path fill="currentColor" d="M7.286 13.234c0-2.571 2.108-4.662 4.714-4.662.879 0 1.706.24 2.409.655l-.806 1.016A3.34 3.34 0 0 0 12 9.857c-1.95 0-3.429 1.449-3.429 3.377v2.675c0 1.928 1.479 3.377 3.429 3.377s3.428-1.449 3.428-3.377v-2.675c0-.497-.042-.784-.23-1.212l1.062-.789c.291.609.454 1.286.454 2.001v2.675c0 2.575-2.108 4.663-4.714 4.663s-4.714-2.088-4.714-4.663z"/>
    <path fill="currentColor" d="M7.843 11.032a4.6 4.6 0 0 0-.557 2.202v2.675c0 1.08.368 2.07.99 2.858l.96-.771a3.56 3.56 0 0 1-.665-2.087v-2.675c0-.531.112-1.032.318-1.482z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#IST__a)" d="M16.715 8.01c0 2.529-2.109 4.582-4.715 4.582a4.74 4.74 0 0 1-2.327-.6l.785-1.042c.462.223.985.352 1.542.352 1.895 0 3.429-1.475 3.429-3.296 0-1.817-1.534-3.292-3.429-3.292S8.572 6.19 8.572 8.006c0 .433.086.848.244 1.226l-1.058.775c-.3-.6-.472-1.281-.472-1.997 0-2.528 2.109-4.58 4.714-4.58s4.715 2.053 4.715 4.581"/>
    <path fill="url(#IST__b)" d="M7.286 13.234c0-2.571 2.109-4.662 4.714-4.662.879 0 1.706.24 2.409.655l-.806 1.016A3.34 3.34 0 0 0 12 9.857c-1.95 0-3.428 1.449-3.428 3.377v2.675c0 1.928 1.478 3.377 3.428 3.377s3.429-1.449 3.429-3.377v-2.675c0-.497-.043-.784-.231-1.212l1.062-.789a4.6 4.6 0 0 1 .455 2.001v2.675c0 2.575-2.109 4.663-4.715 4.663s-4.714-2.088-4.714-4.663z"/>
    <path fill="url(#IST__c)" d="M7.843 11.032a4.6 4.6 0 0 0-.557 2.202v2.675c0 1.08.369 2.07.99 2.858l.96-.771a3.56 3.56 0 0 1-.664-2.087v-2.675c0-.531.111-1.032.317-1.482z"/>
    <defs>
        <linearGradient id="IST__a" x1="15.043" x2="4.806" y1="5.521" y2="11.193" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6B54FE"/>
            <stop offset="1" stopColor="#FA81CF"/>
        </linearGradient>
        <linearGradient id="IST__b" x1="14.066" x2="5.355" y1="4.935" y2="16.137" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BE7FFE"/>
            <stop offset=".68" stopColor="#FDC142"/>
            <stop offset="1" stopColor="#FE8D03"/>
        </linearGradient>
        <linearGradient id="IST__c" x1="8.259" x2="8.259" y1="11.37" y2="18.767" gradientUnits="userSpaceOnUse">
            <stop offset=".07" stopColor="#E2A495"/>
            <stop offset=".29" stopColor="#FE581B"/>
            <stop offset=".51" stopColor="#FE5602"/>
            <stop offset=".75" stopColor="#FE6502"/>
            <stop offset=".91" stopColor="#FE9912"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconIst.displayName = 'Ist';

export default IconIst;
