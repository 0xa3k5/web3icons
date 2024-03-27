
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconUsdx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.847 8.143c2.211 0 4.01 1.87 4.01 4.167 0 2.298-1.799 3.976-4.01 3.976h-.702v-1.714h.702c1.267 0 2.298-.94 2.298-2.261 0-1.323-1.031-2.454-2.298-2.454H7.714v7.286H6v-9z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12.183 5.143c3.68 0 6.674 3.076 6.674 6.857s-2.994 6.857-6.674 6.857H8.57v-8.142h1.715v6.428h1.897c2.745 0 4.96-2.316 4.96-5.143s-2.215-5.143-4.96-5.143h-4.04V5.143z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#FA9B00" d="M11.847 8.143c2.211 0 4.01 1.87 4.01 4.167 0 2.298-1.799 3.976-4.01 3.976h-.702v-1.714h.702c1.267 0 2.298-.94 2.298-2.261 0-1.323-1.031-2.454-2.298-2.454H7.714v7.286H6v-9z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#242A47" d="M12.182 5.143c3.68 0 6.675 3.076 6.675 6.857s-2.994 6.857-6.675 6.857h-3.61v-8.142h1.713v6.428h1.897c2.746 0 4.96-2.316 4.96-5.143s-2.214-5.143-4.96-5.143h-4.04V5.143z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconUsdx.displayName = 'Usdx';

export default IconUsdx;
