
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDmc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.68 11.143 6.613 6.428l2.841 4.715zm0 0L5.143 18l4.311-6.857z"/>
    <path fill="currentColor" d="M6.6 6.441 5.143 18l2.571-6.857zm9.72 4.702 1.067-4.715-2.841 4.715zm0 0L18.857 18l-4.311-6.857z"/>
    <path fill="currentColor" d="M17.4 6.441 18.857 18l-2.571-6.857zM12 10.2s-1.628.583-2.447.866L12 15.013zm0-.004s1.637.587 2.452.87l-2.447 3.947V10.2z"/>
    <path fill="currentColor" d="m12 10.213-2.447.866L12 7.136zm0 0 2.452.857L12 7.136z"/>

        </>
      ) : (
        <>
          
    <path fill="#02828B" d="M7.68 11.143 6.613 6.428l2.841 4.715z"/>
    <path fill="#00514F" d="M7.68 11.143 5.143 18l4.311-6.857z"/>
    <path fill="#001E1E" d="M6.6 6.441 5.143 18l2.571-6.857z"/>
    <path fill="#02828B" d="m16.32 11.143 1.067-4.715-2.842 4.715z"/>
    <path fill="#00514F" d="M16.32 11.143 18.857 18l-4.312-6.857z"/>
    <path fill="#001E1E" d="M17.4 6.441 18.857 18l-2.572-6.857z"/>
    <path fill="#00504F" d="M12 10.2s-1.629.583-2.447.866L12 15.013z"/>
    <path fill="#001E1E" d="M12 10.196s1.637.587 2.451.87l-2.447 3.947V10.2z"/>
    <path fill="#01A0A6" d="m12 10.213-2.447.866L12 7.136z"/>
    <path fill="#028188" d="m12 10.213 2.451.857L12 7.136z"/>

        </>
      )}
    </BaseIcon>
));

IconDmc.displayName = 'Dmc';

export default IconDmc;
