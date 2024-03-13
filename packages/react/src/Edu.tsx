
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEdu = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.571 15.47v-.975l5.572 2.86v-4.193l1.251-.822c.019.06.034.118.034.238v5.477c0 .912-.968.906-1.389.664-1.396-.801-4.697-2.44-5.014-2.583-.316-.143-.448-.504-.454-.667"/><path fill="currentColor" d="m9.428 13.907-3.857-2.144v1.426l3.857 2.108zM5.571 10.187l5.573 2.975 1.253-.814s-.139-.149-.3-.25L5.723 8.652a.47.47 0 0 0-.152.326z"/><path fill="currentColor" d="M11.498 5.265 5.723 8.652l1.23.714 2.018-1.119 5.18 2.972 1.16-.802a1.3 1.3 0 0 0-.37-.331l-4.604-2.589 1.724-.951 5.08 2.925 1.186-.789c-.084-.176-.288-.306-.392-.37l-5.391-3.047a1.17 1.17 0 0 0-1.046 0"/><path fill="currentColor" d="M14.143 18.559v-7.335l1.165-.808c.096.103.12.274.12.336v6.976zM17.143 16.721V9.475l1.165-.798c.096.101.12.27.12.332v6.552s0 .274-.193.414z"/>
        </>
      ) : (
        <>
          <path fill="url(#EDU__a)" d="M5.571 15.47v-.975l5.572 2.86v-4.193l1.251-.822c.019.06.034.118.034.238v5.477c0 .912-.968.906-1.389.664-1.396-.801-4.697-2.44-5.014-2.583-.316-.143-.448-.504-.454-.667"/><path fill="#4273EB" d="m9.428 13.907-3.857-2.144v1.426l3.857 2.108z"/><path fill="url(#EDU__b)" d="m5.571 10.187 5.573 2.975 1.253-.814s-.139-.149-.3-.25L5.723 8.652a.47.47 0 0 0-.152.326z"/><path fill="url(#EDU__c)" d="M11.498 5.265 5.723 8.652l1.23.714 2.018-1.119 5.18 2.972 1.16-.802a1.3 1.3 0 0 0-.37-.331l-4.604-2.589 1.724-.951 5.08 2.925 1.186-.789c-.084-.176-.288-.306-.392-.37l-5.391-3.047a1.17 1.17 0 0 0-1.046 0"/><path fill="url(#EDU__d)" d="M14.143 18.559v-7.335l1.165-.808c.096.103.12.274.12.336v6.976z"/><path fill="url(#EDU__e)" d="M17.143 16.721V9.475l1.165-.798c.096.101.12.27.12.332v6.552s0 .274-.193.414z"/><defs><linearGradient id="EDU__a" x1="16.383" x2="12.692" y1="6.286" y2="17.337" gradientUnits="userSpaceOnUse"><stop stopColor="#7CD872"/><stop offset=".796" stopColor="#4073F3"/></linearGradient><linearGradient id="EDU__b" x1="5.571" x2="18.162" y1="7.83" y2="12.12" gradientUnits="userSpaceOnUse"><stop stopColor="#6EC185"/><stop offset="1" stopColor="#4373EA"/></linearGradient><linearGradient id="EDU__c" x1="9.305" x2="17.218" y1="8.131" y2="10.466" gradientUnits="userSpaceOnUse"><stop stopColor="#7BDF6A"/><stop offset="1" stopColor="#416FF6"/></linearGradient><linearGradient id="EDU__d" x1="12" x2="12" y1="5.143" y2="18.857" gradientUnits="userSpaceOnUse"><stop stopColor="#7CD872"/><stop offset="1" stopColor="#4073F3"/></linearGradient><linearGradient id="EDU__e" x1="17.786" x2="17.786" y1="8.677" y2="16.721" gradientUnits="userSpaceOnUse"><stop stopColor="#7CD872"/><stop offset="1" stopColor="#4073F3"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEdu.displayName = 'Edu';

export default IconEdu;
