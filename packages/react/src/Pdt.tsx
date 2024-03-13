
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPdt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 7.899 9.386 12h.004l-.6.951h-.004L5.57 18V6l2.61 4.101-.604.948-.973-1.53v4.962L8.181 12l.6-.951h.005L12 6l2.61 4.101-.604.948zm3.214 3.15L18.428 6v12l-2.614-4.101.609-.952.973 1.534V9.52l-1.183 1.855-.395.626L12 18l-2.61-4.101.604-.948L12 16.101 14.61 12l.6-.951z"/>
        </>
      ) : (
        <>
          <path fill="#8CDC48" d="M12 7.899 9.386 12h.004l-.6.951h-.004L5.57 18V6l2.61 4.101-.604.948-.973-1.53v4.962L8.181 12l.6-.951h.005L12 6l2.61 4.101-.604.948zm3.214 3.15L18.428 6v12l-2.614-4.101.609-.952.973 1.534V9.52l-1.183 1.855-.395.626L12 18l-2.61-4.101.604-.948L12 16.101 14.61 12l.6-.951z"/>
        </>
      )}
    </BaseIcon>
));

IconPdt.displayName = 'Pdt';

export default IconPdt;
