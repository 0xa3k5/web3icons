
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBxx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M3 9h2.876a1.65 1.65 0 0 1 1.65 1.65 1.14 1.14 0 0 1-1.14 1.14h-.047a1.38 1.38 0 0 1 1.375 1.38A1.83 1.83 0 0 1 5.884 15H3zm1.286.857H5.57a.857.857 0 0 1 0 1.714H4.286zm0 2.572H5.57a.857.857 0 0 1 0 1.714H4.286z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M8.143 9h1.731l4.269 6H12.41z"/>
    <path fill="currentColor" d="M13.714 9h-1.731l-4.269 6h1.732zM15 9h1.731L21 15h-1.731z"/>
    <path fill="currentColor" d="M20.571 9H18.84l-4.269 6h1.732z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BXX__a)" d="M3 9h2.876a1.65 1.65 0 0 1 1.65 1.65 1.14 1.14 0 0 1-1.14 1.14h-.047a1.38 1.38 0 0 1 1.375 1.38A1.83 1.83 0 0 1 5.884 15H3zm1.286.857H5.57a.857.857 0 0 1 0 1.714H4.286zm0 2.572H5.57a.857.857 0 0 1 0 1.714H4.286z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#BXX__b)" d="M8.143 9h1.731l4.269 6H12.41z"/>
    <path fill="url(#BXX__c)" d="M13.714 9h-1.731l-4.269 6h1.732zM15 9h1.731L21 15h-1.731z"/>
    <path fill="url(#BXX__d)" d="M20.571 9H18.84l-4.269 6h1.732z"/>
    <defs>
        <linearGradient id="BXX__a" x1="21" x2="3.011" y1="11.839" y2="11.357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#59B5F6"/>
            <stop offset="1" stopColor="#1648C7"/>
        </linearGradient>
        <linearGradient id="BXX__b" x1="21" x2="3.011" y1="11.839" y2="11.357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#59B5F6"/>
            <stop offset="1" stopColor="#1648C7"/>
        </linearGradient>
        <linearGradient id="BXX__c" x1="21" x2="3.011" y1="11.839" y2="11.357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#59B5F6"/>
            <stop offset="1" stopColor="#1648C7"/>
        </linearGradient>
        <linearGradient id="BXX__d" x1="21" x2="3.011" y1="11.839" y2="11.357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#59B5F6"/>
            <stop offset="1" stopColor="#1648C7"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBxx.displayName = 'Bxx';

export default IconBxx;
