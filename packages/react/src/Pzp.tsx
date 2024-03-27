
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPzp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.571 17.571h.857v1.667c0 .262-.192.476-.428.476s-.429-.214-.429-.476zm-1.714-.857h.857v1.667c0 .262-.193.476-.428.476-.236 0-.429-.214-.429-.476zm2.571-10.285h-.857V4.76c0-.261.193-.475.429-.475s.428.214.428.475zm1.715.428h-.857V5.19c0-.262.192-.476.428-.476s.429.214.429.476z"/>
    <path fill="currentColor" d="M7.714 6v1.307C7.714 8.353 8.584 9 9.66 9h1.821c.39 0 .772.12.913.18a281 281 0 0 0-3.343 3.527c-.313.36-1.337 1.457-1.337 2.846a1.903 1.903 0 0 0 1.642 2.018h6.93v-1.307c0-1.045-.87-1.693-1.946-1.693h-1.697a4 4 0 0 1-1.067-.18c.87-.908 2.807-3.025 3.192-3.407.489-.471 1.522-1.363 1.522-3.025a1.934 1.934 0 0 0-1.522-1.96z"/>
    <path fill="currentColor" d="m12.454 9.386-1.213 2.1c-.223.381-.527.797-.527 1.157 0 .857.596 1.341.857 1.5.502-.707.69-.99 1.179-1.71a2.8 2.8 0 0 0 .536-1.864c0-1.282-1.188-1.96-1.715-1.998H9.476a1.93 1.93 0 0 1-1.762-1.264C7.714 8.353 8.584 9 9.66 9h1.911c.33 0 .643.214.883.386"/>

        </>
      ) : (
        <>
          
    <path fill="url(#PZP__a)" d="M11.572 17.571h.857v1.667c0 .262-.193.476-.429.476-.235 0-.428-.214-.428-.476z"/>
    <path fill="url(#PZP__b)" d="M9.857 16.714h.858v1.667c0 .262-.193.476-.429.476s-.429-.214-.429-.476z"/>
    <path fill="url(#PZP__c)" d="M12.429 6.429h-.857V4.76c0-.261.193-.475.428-.475.236 0 .429.214.429.475z"/>
    <path fill="url(#PZP__d)" d="M14.143 6.857h-.857V5.19c0-.262.193-.476.429-.476.235 0 .428.214.428.476z"/>
    <path fill="url(#PZP__e)" d="M7.715 6v1.307C7.715 8.353 8.585 9 9.66 9h1.822c.39 0 .771.12.913.18a281 281 0 0 0-3.343 3.527c-.313.36-1.337 1.457-1.337 2.846a1.903 1.903 0 0 0 1.641 2.018h6.93v-1.307c0-1.045-.87-1.693-1.946-1.693h-1.697a4 4 0 0 1-1.067-.18c.87-.908 2.807-3.025 3.193-3.407.489-.471 1.521-1.363 1.521-3.025a1.934 1.934 0 0 0-1.521-1.96z"/>
    <path fill="url(#PZP__f)" d="m12.455 9.386-1.213 2.1c-.223.381-.527.797-.527 1.157 0 .857.595 1.341.857 1.5.501-.707.69-.99 1.178-1.71a2.8 2.8 0 0 0 .536-1.864c0-1.282-1.187-1.96-1.714-1.998H9.476a1.93 1.93 0 0 1-1.761-1.264C7.715 8.353 8.585 9 9.66 9h1.912c.33 0 .643.214.883.386"/>
    <defs>
        <linearGradient id="PZP__a" x1="7.71" x2="13.546" y1="5.582" y2="21.981" gradientUnits="userSpaceOnUse">
            <stop offset=".02" stopColor="#D4964B"/>
            <stop offset=".54" stopColor="#FFED87"/>
        </linearGradient>
        <linearGradient id="PZP__b" x1="7.71" x2="13.769" y1="4.286" y2="17.047" gradientUnits="userSpaceOnUse">
            <stop offset=".31" stopColor="#D4964B"/>
            <stop offset=".79" stopColor="#FFED87"/>
        </linearGradient>
        <linearGradient id="PZP__c" x1="7.71" x2="13.546" y1="5.582" y2="21.981" gradientUnits="userSpaceOnUse">
            <stop offset=".52" stopColor="#FFED87"/>
            <stop offset=".86" stopColor="#D4964B"/>
        </linearGradient>
        <linearGradient id="PZP__d" x1="7.71" x2="13.769" y1="4.286" y2="17.047" gradientUnits="userSpaceOnUse">
            <stop offset=".52" stopColor="#FFED87"/>
            <stop offset=".86" stopColor="#D4964B"/>
        </linearGradient>
        <linearGradient id="PZP__e" x1="15.802" x2="5.277" y1="5.154" y2="16.167" gradientUnits="userSpaceOnUse">
            <stop offset=".05" stopColor="#F8FCDA"/>
            <stop offset=".26" stopColor="#FCE34B"/>
            <stop offset=".76" stopColor="#FFAB39"/>
        </linearGradient>
        <linearGradient id="PZP__f" x1="13.187" x2="10.311" y1="9.441" y2="14.25" gradientUnits="userSpaceOnUse">
            <stop offset=".06" stopColor="#F96428"/>
            <stop offset=".8" stopColor="#F3F14F"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconPzp.displayName = 'Pzp';

export default IconPzp;
