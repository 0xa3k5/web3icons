
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPex = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.388 10.677q-.06.076-.125.162c-.548.703-1.367 1.753-1.406 2.374-.055.9.986 1.787 2.143 1.787 1.158 0 2.199-.887 2.143-1.787-.038-.621-.857-1.676-1.405-2.379l-.318-.411c-.09-.124-.261-.137-.42-.137-.137-.004-.347.038-.42.137q-.08.113-.192.254"/>
    <path fill="currentColor" d="M18.755 12.133a6.754 6.754 0 1 1-13.509 0 6.754 6.754 0 0 1 13.509 0m-5.46-4.419c-.3.335-.909 1.059-.952 1.286h.3l1.586-1.286zM11.932 9h.137a2.3 2.3 0 0 1 1.448.549q.105.098.19.214.576.818 1.066 1.693l.02.034c.116.2.22.38.31.523a2.73 2.73 0 0 1 0 2.584A3.52 3.52 0 0 1 12 16.286a3.52 3.52 0 0 1-3.103-1.689 2.73 2.73 0 0 1 0-2.584c.095-.15.206-.343.326-.557l.055-.092c.286-.486.634-1.078 1.017-1.601.437-.6 1.23-.754 1.637-.763" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 18.754a6.755 6.755 0 1 0 0-13.51 6.755 6.755 0 0 0 0 13.51m0-.57a6.184 6.184 0 1 0 0-12.368 6.184 6.184 0 0 0 0 12.368" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.643a6.644 6.644 0 1 0 0-13.288 6.644 6.644 0 0 0 0 13.288" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#PEX__a)" d="M11.388 10.677q-.06.076-.125.162c-.549.703-1.367 1.753-1.406 2.374-.056.9.986 1.787 2.143 1.787s2.198-.887 2.143-1.787c-.039-.621-.857-1.676-1.406-2.379l-.317-.411c-.09-.124-.262-.137-.42-.137-.137-.004-.347.038-.42.137q-.081.113-.192.254"/>
    <path fill="url(#PEX__b)" d="M18.754 12.133a6.754 6.754 0 1 1-13.508 0 6.754 6.754 0 0 1 13.508 0m-5.46-4.419c-.3.335-.908 1.059-.951 1.286h.3l1.585-1.286zM11.931 9h.137a2.28 2.28 0 0 1 1.449.549q.105.098.189.214.577.818 1.067 1.693l.02.034c.116.2.22.38.31.523a2.73 2.73 0 0 1 0 2.584A3.52 3.52 0 0 1 12 16.286a3.52 3.52 0 0 1-3.103-1.689 2.73 2.73 0 0 1 0-2.584c.094-.15.206-.343.326-.557l.054-.092c.286-.486.635-1.078 1.017-1.601.437-.6 1.23-.754 1.637-.763" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#PEX__c)" d="M12 18.754a6.755 6.755 0 1 0 0-13.51 6.755 6.755 0 0 0 0 13.51m0-.57a6.184 6.184 0 1 0 0-12.368 6.184 6.184 0 0 0 0 12.368" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#PEX__d)" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.643a6.644 6.644 0 1 0 0-13.288 6.644 6.644 0 0 0 0 13.288" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="PEX__a" x1="9.069" x2="12.513" y1="6.601" y2="13.452" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C2F2DF"/>
            <stop offset="1" stopColor="#0DB775"/>
        </linearGradient>
        <linearGradient id="PEX__b" x1="9.069" x2="12.513" y1="6.601" y2="13.452" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C2F2DF"/>
            <stop offset="1" stopColor="#0DB775"/>
        </linearGradient>
        <linearGradient id="PEX__c" x1="4.071" x2="18.874" y1="10.475" y2="13.858" gradientUnits="userSpaceOnUse">
            <stop stopColor="#05462E"/>
            <stop offset="1" stopColor="#23C49B"/>
        </linearGradient>
        <linearGradient id="PEX__d" x1="8.13" x2="13.714" y1="5.893" y2="18.939" gradientUnits="userSpaceOnUse">
            <stop stopColor="#24C998"/>
            <stop offset="1" stopColor="#2EAD7B"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconPex.displayName = 'Pex';

export default IconPex;
