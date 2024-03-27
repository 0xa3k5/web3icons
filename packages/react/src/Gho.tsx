
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGho = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.946 12h2.49l1.992 3.429v2.143H10.83c-2.906 0-5.259-2.405-5.259-5.375v-.394c0-2.974 2.357-5.374 5.259-5.374h3.193l1.234 2.143h-4.17a3.386 3.386 0 0 0-3.343 3.42c0 1.885 1.496 3.437 3.343 3.437h4.851zm-2.375-1.5a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0m0 3a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0"/>

        </>
      ) : (
        <>
          
    <path fill="#C9B4F9" d="M13.946 12h2.49l1.992 3.429v2.143H10.83c-2.906 0-5.259-2.405-5.259-5.375v-.394c0-2.974 2.357-5.374 5.259-5.374h3.193l1.234 2.143h-4.17a3.386 3.386 0 0 0-3.343 3.42c0 1.885 1.496 3.437 3.343 3.437h4.851zm-2.375-1.5a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0m0 3a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0"/>

        </>
      )}
    </BaseIcon>
));

IconGho.displayName = 'Gho';

export default IconGho;
