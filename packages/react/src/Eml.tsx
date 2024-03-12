
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEml = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.143 13.543A3.815 3.815 0 0 1 4.286 9.77 3.814 3.814 0 0 1 8.143 6a3.85 3.85 0 0 1 3.685 2.657c.416 1.316.686 1.62.172 3.883 0 1.007.086 1.929.257 2.516-.514-.502-.926-1.757-1.543-1.757-.87 0-1.714.248-2.571.248z"/><path fill="currentColor" d="M14.653 10.213c-.686.064-1.376.056-1.625-.189-.41-.403-1.028-1.174-1.285-1.508.171.42.514 1.41.514 2.014 0 .24-.077.609-.171 1.033-.545 2.58.282 6.008 3.771 6.008 2.13 0 3.857-1.688 3.857-3.771a3.814 3.814 0 0 0-3.857-3.771c-.42 0-.827.064-1.204.184"/>
        </>
      ) : (
        <>
          <path fill="url(#EML__a)" d="M8.143 13.543A3.815 3.815 0 0 1 4.286 9.77 3.814 3.814 0 0 1 8.143 6a3.85 3.85 0 0 1 3.686 2.657c.416 1.316.686 1.62.171 3.883 0 1.007.086 1.929.258 2.516-.515-.502-.926-1.757-1.543-1.757-.87 0-1.715.248-2.572.248z"/><path fill="url(#EML__b)" d="M14.653 10.213c-.685.064-1.375.056-1.624-.189-.411-.403-1.029-1.174-1.286-1.508.172.42.515 1.41.515 2.014 0 .24-.078.609-.172 1.033-.544 2.58.283 6.008 3.772 6.008 2.13 0 3.857-1.688 3.857-3.771a3.814 3.814 0 0 0-3.857-3.771c-.42 0-.828.064-1.205.184"/><defs><linearGradient id="EML__a" x1="6.767" x2="14.915" y1="7.928" y2="16.833" gradientUnits="userSpaceOnUse"><stop stopColor="#6DB82B"/><stop offset="1" stopColor="#C9D808"/></linearGradient><linearGradient id="EML__b" x1="12.258" x2="18.575" y1="11.533" y2="16.701" gradientUnits="userSpaceOnUse"><stop stopColor="#4683C3"/><stop offset="1" stopColor="#71C6E3"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEml.displayName = 'Eml';
IconEml.variants = 'brandedmono';

export default IconEml;
