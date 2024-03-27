
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTvk = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.952 18.75c-.146.244-.292.536-.63.536-.292 0-.532-.292-.678-.536L5.914 8.23c-.141-.292-.287-.583-.338-.922-.047-.535.244-.878.775-.878h3.935c.531 0 .921.244 1.213.78.63 1.264 1.067 2.335 1.89 3.505 1.941 2.19 3.835 0 4.611-.878z"/>

        </>
      ) : (
        <>
          
    <path fill="#30FFE0" d="M12.951 18.75c-.146.244-.291.536-.63.536-.291 0-.531-.292-.677-.536L5.914 8.23c-.142-.292-.287-.583-.339-.922-.047-.535.245-.878.776-.878h3.934c.532 0 .922.244 1.213.78.63 1.264 1.067 2.335 1.89 3.505 1.942 2.19 3.836 0 4.612-.878z"/>

        </>
      )}
    </BaseIcon>
));

IconTvk.displayName = 'Tvk';

export default IconTvk;
