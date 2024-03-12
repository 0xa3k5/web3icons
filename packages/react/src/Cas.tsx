
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCas = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.284 4.714H8.57v2.592A5.57 5.57 0 0 0 6 12a5.57 5.57 0 0 0 2.571 4.695v2.59h1.713v-1.863a5.6 5.6 0 0 0 2.573 0v1.863h1.714v-2.59q.463-.296.858-.675v1.552h1.714V6.857h-1.714v1.124a5.6 5.6 0 0 0-.858-.675V4.714h-1.714V6.58a5.6 5.6 0 0 0-2.573 0zM15.429 12a3.857 3.857 0 1 0-7.714 0 3.857 3.857 0 0 0 7.714 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#0723A1" d="M10.284 4.714H8.57v2.592A5.57 5.57 0 0 0 6 12a5.57 5.57 0 0 0 2.571 4.695v2.59h1.713v-1.863a5.6 5.6 0 0 0 2.573 0v1.863h1.714v-2.59q.463-.296.858-.675v1.552h1.714V6.857h-1.714v1.124a5.6 5.6 0 0 0-.858-.675V4.714h-1.714V6.58a5.6 5.6 0 0 0-2.573 0zM15.429 12a3.857 3.857 0 1 0-7.714 0 3.857 3.857 0 0 0 7.714 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconCas.displayName = 'Cas';
IconCas.variants = 'brandedmono';

export default IconCas;
