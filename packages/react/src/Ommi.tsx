
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOmmi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.454 6.446a5.6 5.6 0 0 1 4.076 2.258l1.041-.758a6.88 6.88 0 0 0-5.117-2.786zm-4.692.171a6.857 6.857 0 0 0 1.654 11.73l.441-1.208a5.572 5.572 0 0 1-1.285-9.527l-.815-.995zm5.25 10.869.214 1.268A6.86 6.86 0 0 0 17.46 16.2l-.947-.878a5.6 5.6 0 0 1-3.502 2.164M10.303 7.714c.712 0 1.29-.575 1.29-1.285s-.578-1.286-1.29-1.286-1.29.576-1.29 1.286.578 1.285 1.29 1.285"/><path fill="currentColor" d="M9.013 12.857A.86.86 0 0 0 9.874 12a.86.86 0 0 0-.861-.857.86.86 0 0 0-.861.857.86.86 0 0 0 .861.857M11.362 18.857c.594 0 1.075-.48 1.075-1.071 0-.592-.481-1.072-1.075-1.072-.595 0-1.076.48-1.076 1.072s.481 1.071 1.076 1.071M13.847 13.817a2.576 2.576 0 0 1-4.084-.574l-1.286.3a3.87 3.87 0 0 0 6.283 1.183zm.129-3.497a2.575 2.575 0 0 0-4.187.394H8.374a3.87 3.87 0 0 1 6.575-1.242z"/>
        </>
      ) : (
        <>
          <path fill="url(#OMMI__a)" d="M12.454 6.446a5.6 5.6 0 0 1 4.076 2.258l1.041-.758a6.88 6.88 0 0 0-5.117-2.786zm-4.693.171a6.857 6.857 0 0 0 1.654 11.73l.442-1.208A5.572 5.572 0 0 1 8.57 7.612l-.814-.995zm5.25 10.869.214 1.268A6.86 6.86 0 0 0 17.46 16.2l-.948-.878a5.6 5.6 0 0 1-3.5 2.164"/><path fill="url(#OMMI__b)" d="M10.303 7.714c.712 0 1.29-.575 1.29-1.285s-.578-1.286-1.29-1.286-1.29.576-1.29 1.286.577 1.285 1.29 1.285"/><path fill="url(#OMMI__c)" d="M9.012 12.857A.86.86 0 0 0 9.874 12a.86.86 0 0 0-.862-.857.86.86 0 0 0-.86.857.86.86 0 0 0 .86.857"/><path fill="url(#OMMI__d)" d="M11.361 18.857c.594 0 1.076-.48 1.076-1.071 0-.592-.482-1.072-1.076-1.072s-1.076.48-1.076 1.072.482 1.071 1.076 1.071"/><path fill="url(#OMMI__e)" d="M13.847 13.817a2.575 2.575 0 0 1-4.085-.574l-1.285.3a3.87 3.87 0 0 0 6.283 1.183zm.128-3.497a2.575 2.575 0 0 0-4.187.394H8.374a3.87 3.87 0 0 1 6.574-1.242z"/><defs><linearGradient id="OMMI__a" x1="15.248" x2="7.667" y1="7.071" y2="18.056" gradientUnits="userSpaceOnUse"><stop stopColor="#3AD02C"/><stop offset=".28" stopColor="#3DD22D"/><stop offset=".59" stopColor="#79D41C"/><stop offset="1" stopColor="#C9D505"/></linearGradient><linearGradient id="OMMI__b" x1="15.508" x2="8.577" y1="8.572" y2="15.891" gradientUnits="userSpaceOnUse"><stop stopColor="#233D1A"/><stop offset="1" stopColor="#2BD009"/></linearGradient><linearGradient id="OMMI__c" x1="16.026" x2="6.155" y1="10.286" y2="16.225" gradientUnits="userSpaceOnUse"><stop stopColor="#A7A710"/><stop offset="1" stopColor="#162C00"/></linearGradient><linearGradient id="OMMI__d" x1="17.571" x2="7.626" y1="13.372" y2="13.372" gradientUnits="userSpaceOnUse"><stop stopColor="#489722"/><stop offset="1" stopColor="#516D3A"/></linearGradient><linearGradient id="OMMI__e" x1="10.303" x2="13.513" y1="9.214" y2="14.794" gradientUnits="userSpaceOnUse"><stop stopColor="#47D12D"/><stop offset=".45" stopColor="#C8D65E" stopOpacity=".59"/><stop offset=".74" stopColor="#51CE32"/><stop offset="1" stopColor="#BFD30F"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconOmmi.displayName = 'Ommi';

export default IconOmmi;
