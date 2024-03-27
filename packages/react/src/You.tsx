
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconYou = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.857 6.857h4.714v2.571H9v4.946c0 .729 1.286 2.254 3 2.34s3-1.53 3-2.34V8.143h-1.286v-.429h1.714v6.66c0 1.144-1.483 2.769-3.428 2.769-1.946 0-3.429-1.715-3.429-2.769V9h2.572V7.285H7.286v7.243c0 1.192 1.285 3.9 4.714 3.9 3.428 0 4.714-2.421 4.714-3.9V7.046h.429v7.482c0 1.659-1.466 4.38-5.143 4.329s-5.143-2.743-5.143-4.329z"/>
    <path fill="currentColor" d="M16.285 6.857h-3.857v2.571h1.715v4.676c0 .497-.703 1.787-2.143 1.753s-2.143-1.166-2.143-1.753v-3.75h-.429v3.75c0 1.063 1.145 2.173 2.572 2.182s2.571-1.235 2.571-2.182V9h-1.714V7.286h3v6.818a3.6 3.6 0 0 1-3.789 3.467c-2.828 0-3.925-2.327-3.925-3.467V8.143h2.143v-.429H7.714v6.39c0 1.586 1.252 3.913 4.354 3.896s4.217-2.464 4.217-3.896z"/>
    <path fill="currentColor" d="M9.647 10.478a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583m.686-2.275a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583m3.33 0a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583m3.27-.763a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583"/>

        </>
      ) : (
        <>
          
    <path fill="url(#YOU__a)" d="M6.857 6.857h4.715v2.571H9v4.946c0 .729 1.286 2.254 3 2.34 1.715.086 3-1.53 3-2.34V8.143h-1.285v-.429h1.714v6.66c0 1.144-1.483 2.769-3.429 2.769s-3.428-1.715-3.428-2.769V9h2.571V7.285H7.286v7.243c0 1.192 1.286 3.9 4.714 3.9s4.715-2.421 4.715-3.9V7.046h.428v7.482c0 1.659-1.466 4.38-5.143 4.329s-5.143-2.743-5.143-4.329z"/>
    <path fill="url(#YOU__b)" d="M16.286 6.857h-3.857v2.571h1.714v4.676c0 .497-.703 1.787-2.143 1.753s-2.143-1.166-2.143-1.753v-3.75H9.43v3.75c0 1.063 1.144 2.173 2.571 2.182s2.572-1.235 2.572-2.182V9h-1.715V7.286h3v6.818a3.6 3.6 0 0 1-3.788 3.467c-2.829 0-3.926-2.327-3.926-3.467V8.143h2.143v-.429H7.715v6.39c0 1.586 1.251 3.913 4.354 3.896s4.217-2.464 4.217-3.896z"/>
    <path fill="url(#YOU__c)" d="M9.647 10.478a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583"/>
    <path fill="url(#YOU__d)" d="M10.333 8.203a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583"/>
    <path fill="url(#YOU__e)" d="M13.663 8.203a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583"/>
    <path fill="url(#YOU__f)" d="M16.933 7.44a.291.291 0 1 0 0-.583.291.291 0 0 0 0 .583"/>
    <defs>
        <linearGradient id="YOU__a" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
        <linearGradient id="YOU__b" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
        <linearGradient id="YOU__c" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
        <linearGradient id="YOU__d" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
        <linearGradient id="YOU__e" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
        <linearGradient id="YOU__f" x1="16.727" x2="17.148" y1="6.978" y2="7.336" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A81ED5"/>
            <stop offset="1" stopColor="#4300D0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconYou.displayName = 'You';

export default IconYou;
