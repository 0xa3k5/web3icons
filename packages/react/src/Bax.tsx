
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBax = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M16.773 16.472a4.484 4.484 0 0 0-5.448-7.122c-2.234 1.709-2.867 5.015-3.191 7.694a.42.42 0 0 0 .36.47c2.653.387 6.057.658 8.28-1.042m-.631-.635a3.597 3.597 0 1 0-4.372-5.714c-1.769 1.354-2.286 3.957-2.55 6.092a.42.42 0 0 0 .36.47c2.117.303 4.802.498 6.562-.848" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M14.973 12.447A4.483 4.483 0 1 0 8.51 6.231C6.56 8.26 6.434 11.622 6.52 14.32c.007.23.195.411.426.41 2.681-.02 6.087-.266 8.027-2.283m-.72-.532a3.597 3.597 0 0 0-5.185-4.987c-1.544 1.606-1.663 4.258-1.6 6.407a.42.42 0 0 0 .427.41c2.138-.02 4.821-.233 6.358-1.83" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#70B1C7" d="M16.773 16.472a4.484 4.484 0 0 0-5.449-7.122c-2.234 1.709-2.867 5.015-3.19 7.694a.42.42 0 0 0 .359.47c2.653.387 6.057.658 8.28-1.042m-.632-.635a3.597 3.597 0 1 0-4.371-5.714C10 11.477 9.483 14.08 9.22 16.215a.42.42 0 0 0 .36.47c2.117.303 4.801.498 6.561-.848" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#FF3838" d="M14.972 12.447A4.483 4.483 0 1 0 8.51 6.231C6.56 8.26 6.434 11.622 6.52 14.32c.007.23.196.411.426.41 2.682-.02 6.088-.266 8.027-2.283m-.72-.532a3.597 3.597 0 0 0-5.185-4.987c-1.544 1.606-1.662 4.258-1.6 6.407a.42.42 0 0 0 .427.41c2.139-.02 4.822-.233 6.358-1.83" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconBax.displayName = 'Bax';

export default IconBax;
