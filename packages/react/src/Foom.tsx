
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFoom = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="red" d="M7.286 5.571h11.572v11.572H7.286z"/><path fill="#00F8FF" d="M5.143 7.286h12v11.142h-12z"/><path fill="#000" d="M6 6.429h12v11.143H6z"/><path fill="#00F8FF" d="M9 10.286h5.143l-.472.643h-3.385v1.07h3.707l-.566.644h-3.141v1.928H9z"/><path fill="red" d="M9.857 9.429H15l-.471.643h-3.386v1.071h3.707l-.565.643h-3.142v1.928H9.857z"/><path fill="#fff" d="M9.429 9.857h5.143l-.472.643h-3.386v1.071h3.708l-.566.643h-3.142v1.929H9.43z"/>
    </BaseIcon>
));

IconFoom.displayName = 'Foom';

export default IconFoom;
