
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEmp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.429 13.714H5.357A6.9 6.9 0 0 1 5.143 12c0-3.789 3.039-6.857 6.789-6.857h6.925l-2.121 2.001-.056-.025zM18.857 12A6.858 6.858 0 0 1 7.2 16.894l2.657-2.751A3.03 3.03 0 0 0 12 15a3 3 0 0 0 2.379-4.83l.193-.171 2.554-2.555A6.83 6.83 0 0 1 18.857 12"/><path fill="currentColor" d="M18.857 12a6.857 6.857 0 0 1-13.371 2.143h4.371l.219.193c.651.578 1.881 1.662 3.78 1.662 2.43 0 4.573-2.425 4.573-4.855a6.8 6.8 0 0 0-.48-2.554A6.8 6.8 0 0 1 18.857 12"/>
        </>
      ) : (
        <>
          <path fill="url(#EMP__a)" d="M9.428 13.714H5.357A6.9 6.9 0 0 1 5.143 12c0-3.789 3.038-6.857 6.788-6.857h6.926l-2.122 2.001-.055-.025z"/><path fill="url(#EMP__b)" d="M18.857 12A6.858 6.858 0 0 1 7.2 16.894l2.657-2.751A3.03 3.03 0 0 0 12 15a3 3 0 0 0 2.378-4.83l.193-.171 2.554-2.555A6.83 6.83 0 0 1 18.857 12"/><path fill="url(#EMP__c)" d="M18.857 12a6.857 6.857 0 0 1-13.372 2.143h4.372l.218.193c.652.578 1.882 1.662 3.78 1.662 2.43 0 4.573-2.425 4.573-4.855a6.8 6.8 0 0 0-.48-2.554A6.8 6.8 0 0 1 18.857 12"/><defs><linearGradient id="EMP__a" x1="7.971" x2="16.636" y1="17.028" y2="13.31" gradientUnits="userSpaceOnUse"><stop stopColor="#0031A5"/><stop offset=".48" stopColor="#009EEF"/><stop offset="1" stopColor="#009DEE"/></linearGradient><linearGradient id="EMP__b" x1="12.03" x2="12.03" y1="5.143" y2="18.862" gradientUnits="userSpaceOnUse"><stop stopColor="#00BAFF"/><stop offset=".67" stopColor="#05207D"/></linearGradient><linearGradient id="EMP__c" x1="19.003" x2="5.318" y1="13.856" y2="14.438" gradientUnits="userSpaceOnUse"><stop stopColor="#03DDFE"/><stop offset=".41" stopColor="#0058C1"/><stop offset=".69" stopColor="#00136C"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEmp.displayName = 'Emp';
IconEmp.variants = 'brandedmono';

export default IconEmp;
