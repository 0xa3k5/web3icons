
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNmx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.198 12.857a6.857 6.857 0 0 1 13.158-3.429H17.6a2.27 2.27 0 0 0-1.594.643l-3.15 3.215V9.77c0-.685-.557-1.191-1.144-1.2-.279 0-.566.095-.802.317l-4.273 3.793a.63.63 0 0 1-.437.176z"/><path fill="currentColor" d="M12 18.857a6.857 6.857 0 0 0 6.793-7.714H17.6a.63.63 0 0 0-.445.184l-4.072 3.771a1.14 1.14 0 0 1-1.941-.827v-3.377l-3.382 3.18c-.424.399-.985.493-1.564.493H5.64c1.02 2.52 3.531 4.29 6.36 4.29"/>
        </>
      ) : (
        <>
          <path fill="#00A0FF" d="M5.199 12.857a6.857 6.857 0 0 1 13.157-3.429h-.754a2.27 2.27 0 0 0-1.594.643l-3.15 3.215V9.77c0-.685-.558-1.191-1.145-1.2a1.15 1.15 0 0 0-.801.317l-4.273 3.793a.63.63 0 0 1-.437.176z"/><path fill="#80CFFF" d="M12 18.857a6.857 6.857 0 0 0 6.793-7.714h-1.191a.63.63 0 0 0-.446.184l-4.071 3.771a1.14 1.14 0 0 1-1.942-.827v-3.377l-3.381 3.18c-.424.399-.986.493-1.564.493H5.64c1.02 2.52 3.532 4.29 6.36 4.29"/>
        </>
      )}
    </BaseIcon>
));

IconNmx.displayName = 'Nmx';
IconNmx.variants = 'brandedmono';

export default IconNmx;
