
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNsfw = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 18.857V11.57H4.286zm0 0V11.57h7.714zm4.071-12L12 11.57h7.714z"/>
    <path fill="currentColor" d="m7.929 6.857 4.07 4.714H4.287zM12 11.571V8.73l4.071-1.873z"/>
    <path fill="currentColor" d="M12 11.571V8.73L7.928 6.857z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#NSFW__a)" d="M12 18.857V11.57H4.286z"/>
    <path fill="url(#NSFW__b)" d="M12 18.857V11.57h7.715z"/>
    <path fill="url(#NSFW__c)" d="M16.072 6.857 12 11.57h7.715z"/>
    <path fill="url(#NSFW__d)" d="M7.929 6.857 12 11.57H4.286z"/>
    <path fill="#8E04E2" d="M12 11.571V8.73l4.072-1.873z"/>
    <path fill="#6801C2" d="M12 11.571V8.73L7.93 6.857z"/>
    <defs>
        <linearGradient id="NSFW__a" x1="8.143" x2="16.677" y1="8.975" y2="20.166" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A03B3"/>
            <stop offset="1" stopColor="#A300D4"/>
        </linearGradient>
        <linearGradient id="NSFW__b" x1="4.286" x2="10.398" y1="6.857" y2="15.103" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A03B3"/>
            <stop offset="1" stopColor="#8C08A0"/>
        </linearGradient>
        <linearGradient id="NSFW__c" x1="12" x2="12" y1="6.857" y2="18.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8605B8"/>
            <stop offset="1" stopColor="#9300CB"/>
        </linearGradient>
        <linearGradient id="NSFW__d" x1="7.715" x2="21.516" y1="11.766" y2="16.827" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4902CC"/>
            <stop offset="1" stopColor="#8C04EE"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconNsfw.displayName = 'Nsfw';

export default IconNsfw;
