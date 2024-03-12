
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBadger = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#0C0B11" d="M6.857 15.63v-.806l10.286-.124v.93h-.429v.441h-.429v.429h-.428v.36h-.429v.428H15v.412H9v-.412H8.57v-.428h-.428v-.364h-.429v-.429h-.429v-.437z"/><path fill="#EDECE8" d="M15.857 6H8.143v-.429h-.429v-.428h-.857v.428H6v2.143h.428V9H6v.857H5.57v1.286h-.428v1.714h.428v.857H6v.429h.428v.428h.429V15h.428v.428h.429v.43h.429v.428h.428v.428H9V18h6v-1.286h.428v-.428h.429v-.429h.428v-.428h.429V15h.429v-.429h.428v-.428H18v-.429h.428v-.857h.429v-1.714h-.429V9.857H18V9h-.429V7.894h.424L18 6.291v-.72h-.857v-.428h-.858v.428h-.428z"/><path fill="#0C0B11" d="M14.571 5.571H9.428V6H9v.429H7.714V6h-.857v.429H6v1.714h.428V9h.429v.429h.428v2.142h.429v1.286h.429v1.714h.428v.857H9v.858h.428v1.782l.857 1.646h.429v.429h.429v.428h1.714v-.428h.428v-.429h.429L14.571 18v-1.714H15v-.858h.428v-.857h.429v-1.714h.428v-1.281h.429V9.429h.429V9h.428v-.857H18V6.429h-.857v-.382h-.858v.382H15V6h-.429z"/><path fill="#EDECE8" d="M13.714 5.571h-3.429v.858h.429v.428h-.429v.857h.429v.857h-.429v4.715h.429v2.143h-.429v2.142h-.428V18h-.429v.857h.429v.857h.428V18.43h.429V18h2.571v.428h.429v1.286h.429v-.857h.428V18h-.428v-.429h-.429v-2.143h-.429v-2.142h.429V8.57h-.429v-.857h.429v-.857h-.429V6.43h.429z"/><path fill="#000" d="M9.857 13.714h-.844v.446H8.57V15h.442v.428h.844V15h.428v-.84h-.428zm5.143 0h-.845v.446h-.441V15h.441v.428H15V15h.428v-.84H15z"/><path fill="#fff" d="M9 14.143h.428v.428H9zm5.143 0h.428v.428h-.428z"/>
    </BaseIcon>
));

IconBadger.displayName = 'Badger';
IconBadger.variants = 'branded';

export default IconBadger;
