
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBzrx = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.143 7.886a2.743 2.743 0 0 1 2.743-2.743h1.543v3h1.285v-3h5.4a2.743 2.743 0 0 1 2.743 2.743v8.228a2.743 2.743 0 0 1-2.742 2.743h-8.23a2.743 2.743 0 0 1-2.742-2.743v-5.4h7.8c.276 0 .343.18.343.455v1.688c0 .276-.153.429-.429.429h-1.73c-.275 0-.413-.217-.413-.492V11.57H9.43v1.42c0 1.033.666 1.58 1.698 1.58h1.817c1.032 0 1.628-.547 1.628-1.58v-1.822c0-1.033-.596-1.74-1.628-1.74h-7.8z"/>
        </>
      ) : (
        <>
          <path fill="url(#BZRX__a)" d="M5.143 7.886a2.743 2.743 0 0 1 2.742-2.743h1.543v3h1.286v-3h5.4a2.743 2.743 0 0 1 2.743 2.743v8.228a2.743 2.743 0 0 1-2.743 2.743H7.885a2.743 2.743 0 0 1-2.742-2.743v-5.4h7.8c.276 0 .342.18.342.455v1.688c0 .276-.153.429-.428.429h-1.73c-.276 0-.413-.217-.413-.492V11.57H9.428v1.42c0 1.033.667 1.58 1.698 1.58h1.817c1.032 0 1.628-.547 1.628-1.58v-1.822c0-1.033-.596-1.74-1.628-1.74h-7.8z"/><defs><linearGradient id="BZRX__a" x1="17.965" x2="6.994" y1="17.966" y2="6.994" gradientUnits="userSpaceOnUse"><stop offset=".159" stopColor="#003CDA"/><stop offset="1" stopColor="#33DFCC"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBzrx.displayName = 'Bzrx';

export default IconBzrx;
