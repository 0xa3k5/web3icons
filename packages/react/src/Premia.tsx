
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPremia = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.876 9.429h6.235c.356 0 .562.377.356.655l-2.914 3.819c-.215.279-.005.669.351.669h2.623c.137 0 .27-.06.352-.172l2.897-3.857a.41.41 0 0 0 0-.497L16.19 6.604a.44.44 0 0 0-.351-.175H8.16a.44.44 0 0 0-.352.171l-2.584 3.446a.41.41 0 0 0 0 .497l6.425 8.571a.442.442 0 0 0 .702 0l1.312-1.752a.41.41 0 0 0 0-.498l-5.135-6.78c-.21-.278 0-.655.352-.655z"/>

        </>
      ) : (
        <>
          
    <path fill="#5293FE" d="M8.876 9.429h6.235c.356 0 .562.377.356.655l-2.914 3.819c-.215.279-.005.669.351.669h2.623c.137 0 .27-.06.352-.172l2.897-3.857a.41.41 0 0 0 0-.497L16.19 6.604a.44.44 0 0 0-.351-.175H8.16a.44.44 0 0 0-.352.171l-2.584 3.446a.41.41 0 0 0 0 .497l6.425 8.571a.442.442 0 0 0 .702 0l1.312-1.752a.41.41 0 0 0 0-.498l-5.135-6.78c-.21-.278 0-.655.352-.655z"/>

        </>
      )}
    </BaseIcon>
));

IconPremia.displayName = 'Premia';

export default IconPremia;
