
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMoc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#9CE3E5" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"/><path fill="#4F97A5" d="M18.857 12a6.857 6.857 0 0 1-13.714 0z"/><path fill="#36C7CE" d="M12 18.429a6.429 6.429 0 1 0 0-12.857 6.429 6.429 0 0 0 0 12.857"/><path fill="#359BB1" d="M12.728 18.815 8.743 15l1.388-4.568 1.603 1.817L14.841 9l3.964 3.857a7.1 7.1 0 0 1-1.362 3.33 7 7 0 0 1-4.715 2.627"/><path fill="#3AB1D3" d="M18.428 12c0-2.25-2.773-6-6.428-6C8.344 6 5.57 9.424 5.57 12a6.428 6.428 0 1 1 12.857 0"/><path fill="#28808E" d="M8.901 11.413V9.202h1.41l1.612 2.644 1.585-2.644H15v2.211l1.285-.201.172.201V12H15v.613l1.281-.201.172.201v.6H15v1.993h-1.316L13.513 15l.171-3.587-1.8 2.443-1.68-2.443v3.793H8.97L8.743 15l.158-1.787H7.444l-.159-.206.159-.394h1.457v-.626H7.444l-.159-.201.159-.373z"/><path fill="#EBEBEB" d="M8.743 11.212V9h1.474l1.543 2.533L13.337 9h1.5v2.212h1.448v.574h-1.444v.621h1.444v.6h-1.444V15h-1.328v-3.788l-1.758 2.451-1.714-2.451V15H8.743v-1.993H7.285v-.6h1.458v-.621H7.285v-.574z"/>
    </BaseIcon>
));

IconMoc.displayName = 'Moc';

export default IconMoc;
