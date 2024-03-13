
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHawk = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.132 17.417a7.28 7.28 0 0 1-2.255-3.878c.724-1.115 2.486-3.437 5.85-4.252l-.128.086c-.772.471-2.075 1.286-2.945 2.811-.891 1.56-1.011 3.515-.522 5.233"/><path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0 0c1.17 0 2.271-.274 3.257-.767-2.083-1.295-4.217-3.643-2.387-6.395a5.46 5.46 0 0 1 5.211-.308c-.3-1.149-1.577-2.546-3.634-3.099-.698-.188-1.153-.428-1.285-.527l-.013-.008c-.519-.36-.737-.51-.896-.536-1.007-.116-2.186.197-3.06.531a8.23 8.23 0 0 0-4.47 4.183A7.286 7.286 0 0 0 12 19.286" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M13.123 9.017a3.8 3.8 0 0 0-2.511.305q.228-.036.458-.052c.094 0 .857.292 1.281.257.318-.03.523-.308.6-.467a.06.06 0 0 1 .043-.03zM11.46 19.264c-1.38-1.898-1.5-5.344 1.406-7.14-1.826 2.752.313 5.1 2.387 6.395a7.26 7.26 0 0 1-3.793.745M14.52 8.734c-.364.073-.986.309-1.131.887-.253.973-.429 2.02-.51 2.495a5.46 5.46 0 0 1 5.202-.3c-.29-1.136-1.547-2.512-3.56-3.082"/>
        </>
      ) : (
        <>
          <path fill="url(#HAWK__a)" d="M7.131 17.417a7.28 7.28 0 0 1-2.254-3.878c.724-1.115 2.485-3.437 5.85-4.252l-.129.086c-.771.471-2.074 1.286-2.944 2.811-.892 1.56-1.012 3.515-.523 5.233"/><path fill="url(#HAWK__b)" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0 0c1.17 0 2.271-.274 3.257-.767-2.083-1.295-4.217-3.643-2.387-6.395a5.46 5.46 0 0 1 5.211-.308c-.3-1.149-1.577-2.546-3.634-3.099-.699-.188-1.153-.428-1.286-.527l-.013-.008c-.518-.36-.737-.51-.896-.536-1.007-.116-2.185.197-3.06.531a8.23 8.23 0 0 0-4.47 4.183A7.286 7.286 0 0 0 12 19.286" fillRule="evenodd" clipRule="evenodd"/><path fill="#0D3137" d="M13.122 9.017a3.8 3.8 0 0 0-2.511.305q.228-.036.459-.052c.094 0 .857.292 1.281.257.317-.03.523-.308.6-.467a.06.06 0 0 1 .043-.03z"/><path fill="url(#HAWK__c)" d="M11.46 19.264c-1.38-1.898-1.5-5.344 1.405-7.14-1.825 2.752.313 5.1 2.387 6.395a7.26 7.26 0 0 1-3.792.745"/><path fill="url(#HAWK__d)" d="M14.52 8.734c-.365.073-.986.309-1.132.887-.253.973-.428 2.02-.51 2.495a5.46 5.46 0 0 1 5.203-.3c-.291-1.136-1.547-2.512-3.561-3.082"/><defs><linearGradient id="HAWK__a" x1="18.741" x2="12.728" y1="4.73" y2="19.84" gradientUnits="userSpaceOnUse"><stop stopColor="#2EE4A9"/><stop offset="1" stopColor="#0BBDC7"/></linearGradient><linearGradient id="HAWK__b" x1="6.381" x2="19.525" y1="7.714" y2="13.526" gradientUnits="userSpaceOnUse"><stop stopColor="#26E09F"/><stop offset="1" stopColor="#02A566"/></linearGradient><linearGradient id="HAWK__c" x1="10.249" x2="11.019" y1="5.464" y2="19.342" gradientUnits="userSpaceOnUse"><stop stopColor="#11AEB9"/><stop offset=".52" stopColor="#91DFE9"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient><linearGradient id="HAWK__d" x1="13.415" x2="17.688" y1="10.183" y2="10.912" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#42C696"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconHawk.displayName = 'Hawk';

export default IconHawk;
