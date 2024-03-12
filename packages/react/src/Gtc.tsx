
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGtc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.861 11.754a3.31 3.31 0 0 0-1.226-2.576l.812-.997a4.6 4.6 0 0 1 1.7 3.573 4.6 4.6 0 0 1-1.7 3.574l-.812-.997a3.31 3.31 0 0 0 1.226-2.577" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M9.428 4.286a.429.429 0 1 1 .857 0v1.65q.627-.221 1.286-.31v-1.34a.428.428 0 1 1 .857 0V5.57a6.4 6.4 0 0 1 4.803 2.156l.023.026-3.403 3.013a1.925 1.925 0 0 1-.126 2.22l3.418 2.646v.74h-.001v2.057h-4.606l-.108.001a6.43 6.43 0 0 1-3-12.118zm3.372 9.338a1.928 1.928 0 1 1 .247-3.578l2.617-2.317a5.33 5.33 0 0 0-3.236-1.087c-.762 0-1.486.158-2.142.445V9a.428.428 0 1 1-.857 0V7.56A5.35 5.35 0 0 0 7.069 12c0 2.96 2.4 5.358 5.359 5.358l.09-.001h3.552v-1.201zm.271-1.838a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#02E2AC" d="M15.861 11.754a3.31 3.31 0 0 0-1.226-2.576l.812-.997a4.6 4.6 0 0 1 1.7 3.573 4.6 4.6 0 0 1-1.7 3.574l-.812-.997a3.31 3.31 0 0 0 1.226-2.577" fillRule="evenodd" clipRule="evenodd"/><path fill="#0E0333" d="M9.428 4.286a.429.429 0 1 1 .857 0v1.65q.627-.221 1.286-.31v-1.34a.428.428 0 1 1 .857 0V5.57a6.4 6.4 0 0 1 4.803 2.156l.023.026-3.403 3.013a1.925 1.925 0 0 1-.126 2.22l3.418 2.646v.74h-.001v2.057h-4.606l-.108.001a6.43 6.43 0 0 1-3-12.118zm3.372 9.338a1.928 1.928 0 1 1 .247-3.578l2.617-2.317a5.33 5.33 0 0 0-3.236-1.087c-.762 0-1.486.158-2.142.445V9a.428.428 0 1 1-.857 0V7.56A5.35 5.35 0 0 0 7.069 12c0 2.96 2.4 5.358 5.359 5.358l.09-.001h3.552v-1.201zm.271-1.838a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconGtc.displayName = 'Gtc';
IconGtc.variants = 'brandedmono';

export default IconGtc;
