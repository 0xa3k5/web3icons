
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHook = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.697 7.714c2.053 0 3.343 1.329 3.729 1.989l-3.06.66.848-.66c-1.941-1.384-4.5.364-4.5 2.186 0 1.461 1.218 2.408 1.766 2.7-1.654-.232-2.751-1.355-2.863-1.715a3.5 3.5 0 0 1-.188-.985c0-2.049 1.701-4.175 4.268-4.175m8.606 8.572c-2.053 0-3.343-1.329-3.729-1.989l3.06-.66-.848.66c1.941 1.384 4.5-.364 4.5-2.186 0-1.46-1.217-2.408-1.766-2.7 1.654.232 2.752 1.355 2.863 1.715.09.291.189.647.189.986 0 2.052-1.702 4.174-4.269 4.174"/>
    <path fill="currentColor" d="M6.673 14.756a3.73 3.73 0 0 1-3.086-1.543c.236 1.457 1.929 3.073 4.162 3.073 1.791 0 3.351-1.565 3.908-2.349l2.203-3.253c.412-.501 1.59-1.504 2.983-1.504s3.064 1.003 3.729 1.504c-.283-.981-1.428-2.94-3.729-2.94s-3.87 1.629-4.371 2.443c-.836 1.132-2.585 3.476-2.902 3.75-.394.343-.771.819-2.897.819"/>

        </>
      ) : (
        <>
          
    <path fill="url(#HOOK__a)" d="M7.697 7.714c2.053 0 3.343 1.329 3.729 1.989l-3.06.66.848-.66c-1.941-1.384-4.5.364-4.5 2.186 0 1.461 1.218 2.408 1.766 2.7-1.654-.232-2.751-1.355-2.863-1.715a3.5 3.5 0 0 1-.188-.985c0-2.049 1.701-4.175 4.268-4.175"/>
    <path fill="url(#HOOK__b)" d="M16.303 16.286c-2.053 0-3.343-1.329-3.729-1.989l3.06-.66-.848.66c1.941 1.384 4.5-.364 4.5-2.186 0-1.46-1.217-2.408-1.766-2.7 1.654.232 2.752 1.355 2.863 1.715.09.291.189.647.189.986 0 2.052-1.702 4.174-4.269 4.174"/>
    <path fill="url(#HOOK__c)" d="M6.673 14.756a3.73 3.73 0 0 1-3.086-1.543c.236 1.457 1.929 3.073 4.162 3.073 1.791 0 3.351-1.565 3.908-2.349l2.203-3.253c.412-.501 1.59-1.504 2.983-1.504s3.064 1.003 3.729 1.504c-.283-.981-1.428-2.94-3.729-2.94s-3.87 1.629-4.371 2.443c-.836 1.132-2.585 3.476-2.902 3.75-.394.343-.771.819-2.897.819"/>
    <defs>
        <linearGradient id="HOOK__a" x1="17.733" x2="15.527" y1="8.457" y2="17.172" gradientUnits="userSpaceOnUse">
            <stop stopColor="#68D869"/>
            <stop offset=".8" stopColor="#C6F88A"/>
        </linearGradient>
        <linearGradient id="HOOK__b" x1="12" x2="15.898" y1="16.286" y2="7.565" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1CD7CA"/>
            <stop offset=".39" stopColor="#1BB8CA"/>
            <stop offset="1" stopColor="#1CD7CA"/>
        </linearGradient>
        <linearGradient id="HOOK__c" x1="3.583" x2="18.514" y1="16.286" y2="3.158" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ADF160"/>
            <stop offset=".65" stopColor="#17B6D7"/>
            <stop offset=".92" stopColor="#0061A0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconHook.displayName = 'Hook';

export default IconHook;
