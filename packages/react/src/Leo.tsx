
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLeo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.857 10.87V6.573l-3.975-2.287-1.733.942.704.413 1.007-.534L15 6.974v3.312h-1.714v1.637zM6 10.286V8.38L9.16 6.446l2.668 1.427.01-.028.33-.606L9.16 5.53 5.17 7.971l-.01 2.315zm2.34.612 2.374 1.02v-1.632H8.185L5.17 11.724l-.027 3.984 1.722 1.212.46-.629L6 15.34v-3.223zm4.587 7.5-1.078.44L9 17.34v-3.252h-.857v3.692l3.667 1.934 1.387-.562zm4.216-2.9v-1.355H18v1.73l-3.912 2.855-2.516-2.022v-1.99l-2.27-2.287h5.04l-1.913 2.282v1.653l1.675 1.3zm.009-8.308 1.705 1.36v4.011l-3.29 2.05-.384-.606L18 12.165V8.881l-1.337-1.008.489-.689z"/>
        </>
      ) : (
        <>
          <path fill="url(#LEO__a)" d="M15.857 10.87V6.573L11.88 4.286l-1.732.942.704.413 1.007-.534L15 6.974v3.312h-1.715v1.637zM6 10.286V8.38l3.158-1.934 2.669 1.427.01-.028.33-.606L9.16 5.53 5.17 7.971l-.01 2.315zm2.339.612 2.375 1.02v-1.632h-2.53L5.17 11.724l-.027 3.984 1.722 1.212.459-.629L6 15.34v-3.223zm4.588 7.5-1.079.44L9 17.34v-3.252h-.857v3.692l3.667 1.934 1.386-.562zm4.216-2.9v-1.355H18v1.73l-3.913 2.855-2.516-2.022v-1.99l-2.27-2.287h5.04l-1.913 2.282v1.653l1.676 1.3zm.008-8.308 1.706 1.36v4.011l-3.29 2.05-.385-.606L18 12.165V8.881l-1.337-1.008.488-.689z"/><defs><linearGradient id="LEO__a" x1="12" x2="12" y1="4.286" y2="19.719" gradientUnits="userSpaceOnUse"><stop stopColor="#F6E93D"/><stop offset=".13" stopColor="#F8E330"/><stop offset=".35" stopColor="#F7C730"/><stop offset=".64" stopColor="#F59C2E"/><stop offset=".98" stopColor="#EB5E2C"/><stop offset="1" stopColor="#EB5C2C"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLeo.displayName = 'Leo';

export default IconLeo;
