
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEpic = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.572 14.143V10.07L13.5 7.287 12 6.429 6.857 9.214v5.572l5.143 3L17.143 15v-1.714L12 16.072z"/><path fill="currentColor" d="M14.357 8.357 15 7.93l1.286.857-.643.428zm-4.5 4.072v-1.5l4.072-2.357 1.285.857zM16.072 10.714l-5.143 3 1.285.857 3.858-2.357zM17.143 11.572l-.857.428v-1.5l.857-.428z"/><path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#EPIC__a)" d="M8.571 14.143V10.07L13.5 7.287 12 6.429 6.857 9.214v5.572l5.143 3L17.142 15v-1.714L12 16.072z"/><path fill="url(#EPIC__b)" d="M14.357 8.357 15 7.93l1.285.857-.643.428zm-4.5 4.072v-1.5l4.071-2.357 1.286.857z"/><path fill="url(#EPIC__c)" d="m16.071 10.714-5.143 3 1.286.857 3.857-2.357z"/><path fill="url(#EPIC__d)" d="m17.142 11.572-.857.428v-1.5l.857-.428z"/><path fill="url(#EPIC__e)" d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="EPIC__a" x1="5.017" x2="19.589" y1="14.337" y2="14.337" gradientUnits="userSpaceOnUse"><stop stopColor="#B28947"/><stop offset=".16" stopColor="#F9CE97"/><stop offset=".52" stopColor="#B08656"/><stop offset=".83" stopColor="#F7CF89"/><stop offset="1" stopColor="#B68E5D"/></linearGradient><linearGradient id="EPIC__b" x1="15.885" x2="3.14" y1="8.878" y2="13.92" gradientUnits="userSpaceOnUse"><stop stopColor="#CAC5C1"/><stop offset=".47" stopColor="#D3CDCD"/><stop offset="1" stopColor="#6D6D6D"/></linearGradient><linearGradient id="EPIC__c" x1="22.321" x2="4.932" y1="5.524" y2="13.871" gradientUnits="userSpaceOnUse"><stop stopColor="#ACACAC"/><stop offset=".5" stopColor="#E5DDDA"/><stop offset="1" stopColor="#747474"/></linearGradient><linearGradient id="EPIC__d" x1="19.285" x2="-22.482" y1="11.191" y2="71.335" gradientUnits="userSpaceOnUse"><stop stopColor="#ACACAC"/><stop offset=".5" stopColor="#E5DDDA"/></linearGradient><linearGradient id="EPIC__e" x1="8.142" x2="15.642" y1="6" y2="18.429" gradientUnits="userSpaceOnUse"><stop stopColor="#F4E9CD"/><stop offset="1" stopColor="#F4F2DA"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEpic.displayName = 'Epic';

export default IconEpic;
