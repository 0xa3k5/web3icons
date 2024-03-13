
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDafi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.429 4.714a.857.857 0 0 0-.858.857V8.59a5.571 5.571 0 1 0 2.572 4.697V5.572a.857.857 0 0 0-.857-.858zm-.858 8.572a3 3 0 1 0-6 0 3 3 0 0 0 6 0" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M11.571 7.714c1.106 0 2.135.322 3 .875v4.268h-.03a3 3 0 0 0-5.94 0H6.017a5.57 5.57 0 0 1 5.554-5.143"/>
        </>
      ) : (
        <>
          <path fill="#33363C" d="M15.429 4.714a.857.857 0 0 0-.858.857V8.59a5.571 5.571 0 1 0 2.572 4.697V5.572a.857.857 0 0 0-.857-.858zm-.858 8.572a3 3 0 1 0-6 0 3 3 0 0 0 6 0" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#DAFI__a)" d="M11.571 7.714c1.106 0 2.135.322 3 .875v4.268h-.03a3 3 0 0 0-5.94 0H6.017a5.57 5.57 0 0 1 5.554-5.143"/><defs><linearGradient id="DAFI__a" x1="15" x2="8.357" y1="9.429" y2="9.429" gradientUnits="userSpaceOnUse"><stop stopColor="#222529"/><stop offset="1" stopColor="#131519" stopOpacity="0"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconDafi.displayName = 'Dafi';

export default IconDafi;
