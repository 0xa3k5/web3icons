
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEng = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#fff" d="m11.977 4.426 6.451 3.702v7.405l-6.451 3.703-6.406-3.703V8.128z"/>
    <path fill="#065198" d="M11.974 11.787 8.57 9.835v3.739l3.403 2.19z"/>
    <path fill="#21B1F8" d="m12 11.956 3.428-1.963v3.758L12 15.881z"/>
    <path fill="#E82E9D" d="m12 7.719 3.432 2.128L12 11.754 8.602 9.848z"/>
    <path fill="#0C0E15" d="M5.319 7.88a.227.227 0 0 0 .082.31l6.374 3.71v7.228a.228.228 0 0 0 .454 0v-7.227l6.366-3.696a.228.228 0 1 0-.229-.392l-6.364 3.694-6.372-3.71a.227.227 0 0 0-.311.082M12 6.311a.366.366 0 1 0 0-.73.366.366 0 0 0 0 .73m0 1.001a.366.366 0 1 0 0-.73.366.366 0 0 0 0 .73M7.826 14.37a.366.366 0 1 0 0-.73.366.366 0 0 0 0 .73m-1.002.629a.366.366 0 1 0 0-.731.366.366 0 0 0 0 .73m9.42-.628a.366.366 0 1 1 0-.73.366.366 0 0 1 0 .73m1.002.629a.366.366 0 1 1 0-.731.366.366 0 0 1 0 .73"/>

    </BaseIcon>
));

IconEng.displayName = 'Eng';

export default IconEng;
