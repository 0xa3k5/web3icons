
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMbx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.143 17.571V7.286h2.739l4.054 3.951 4.059-3.951h2.862V17.57H18.6l-1.787-1.757-3.077-2.85.098-.085 2.88 2.665V9.227l-4.778 4.35-4.65-4.35v6.317l2.88-2.665.098.085-4.97 4.607h-.112l-.018-.017zm6.373-3.484.098.086-3.668 3.398h-.189zm-.343-.309.099.086-3.999 3.707H7.08zm-.326-.29.099.085L6.63 17.57h-.193l4.415-4.084zm-.317-.284.099.086-4.62 4.281h-.193zm1.955.883-.1.086 3.67 3.398h.188zm.342-.309-.098.086 3.998 3.707h.193zm.326-.29-.098.085 4.315 3.998h.193l-4.414-4.084zm.317-.284-.098.086 4.62 4.281h.192z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#MBX__a)" d="M5.143 17.571V7.286H7.88l4.054 3.951 4.059-3.951h2.863V17.57H18.6l-1.787-1.757-3.078-2.85.099-.085 2.88 2.665V9.227l-4.779 4.35-4.65-4.35v6.317l2.88-2.665.099.085-4.971 4.607H5.18l-.017-.017zm6.372-3.484.099.086-3.669 3.398h-.188zm-.342-.309.098.086-3.998 3.707H7.08zm-.326-.29.098.085L6.63 17.57h-.193l4.414-4.084zm-.317-.284.098.086-4.62 4.281h-.193zm1.954.883-.099.086 3.669 3.398h.189zm.343-.309-.099.086 3.999 3.707h.193zm.326-.29-.099.085 4.316 3.998h.193l-4.415-4.084zm.317-.284-.099.086 4.62 4.281h.193z"/>
    <defs>
        <linearGradient id="MBX__a" x1="5.143" x2="12.925" y1="8.057" y2="15.664" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4BABFF"/>
            <stop offset=".89" stopColor="#9600FF"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconMbx.displayName = 'Mbx';

export default IconMbx;
