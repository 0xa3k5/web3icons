
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMft = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.457 12c0 2.84-2.245 5.143-5.014 5.143S3.429 14.84 3.429 12s2.245-5.143 5.014-5.143S13.457 9.159 13.457 12m-2.829 0c0 1.238-.978 2.242-2.185 2.242S6.257 13.238 6.257 12 7.235 9.76 8.443 9.76s2.185 1.003 2.185 2.241" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M20.572 12c0 2.84-2.245 5.143-5.015 5.143S10.543 14.84 10.543 12s2.245-5.143 5.014-5.143S20.572 9.159 20.572 12m-2.83 0c0 1.238-.978 2.242-2.185 2.242S13.37 13.238 13.37 12s.979-2.241 2.186-2.241 2.185 1.003 2.185 2.241" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M10.534 11.966c0-1.843.965-3.167 1.466-3.6a5 5 0 0 1 1.483 3.6A5.5 5.5 0 0 1 12 15.634a5.23 5.23 0 0 1-1.466-3.668"/>
        </>
      ) : (
        <>
          <path fill="#DA1157" d="M13.457 12c0 2.84-2.245 5.143-5.014 5.143S3.429 14.84 3.429 12s2.245-5.143 5.014-5.143S13.457 9.159 13.457 12m-2.829 0c0 1.238-.978 2.242-2.185 2.242S6.257 13.238 6.257 12 7.235 9.76 8.443 9.76s2.185 1.003 2.185 2.241" fillRule="evenodd" clipRule="evenodd"/><path fill="#00A7E7" d="M20.572 12c0 2.84-2.245 5.143-5.015 5.143S10.543 14.84 10.543 12s2.245-5.143 5.014-5.143S20.572 9.159 20.572 12m-2.83 0c0 1.238-.978 2.242-2.185 2.242S13.37 13.238 13.37 12s.979-2.241 2.186-2.241 2.185 1.003 2.185 2.241" fillRule="evenodd" clipRule="evenodd"/><path fill="#1F3464" d="M10.534 11.966c0-1.843.965-3.167 1.466-3.6a5 5 0 0 1 1.483 3.6A5.5 5.5 0 0 1 12 15.634a5.23 5.23 0 0 1-1.466-3.668"/>
        </>
      )}
    </BaseIcon>
));

IconMft.displayName = 'Mft';
IconMft.variants = 'brandedmono';

export default IconMft;
