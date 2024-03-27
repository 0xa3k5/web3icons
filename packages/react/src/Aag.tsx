
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAag = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 6.857a5.1 5.1 0 0 0-3.017.96l-.197.154-.429-.257.386-.231a5.571 5.571 0 0 1 7.714 7.86l-.33-.249A5.12 5.12 0 0 0 17.143 12 5.13 5.13 0 0 0 12 6.857M7.856 8.931a5.1 5.1 0 0 0-.999 3.07A5.13 5.13 0 0 0 12 17.142c1.149 0 2.207-.36 3.064-.994l.249.334a5.57 5.57 0 0 1-7.787-7.8z"/>
    <path fill="currentColor" d="M8.143 8.572a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .857m0 .428a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m7.714 7.286a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .858m0 .428a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M8.002 8.306 6.789 7.093l.3-.3 1.217 1.209-.3.304zm8.905 8.906-1.213-1.213.3-.305 1.218 1.213zm-3.621-8.983v1.53L15 8.837v4.843l-2.143-1.033v-2.173l-1.714.922v3.943L9 14.306v-4.003zm-.429 1.757V8.914L9.43 10.573v3.463l1.285.621v-3.514zm.429.257v2.134l1.286.622V9.557l-1.286.69z"/>

    </BaseIcon>
));

IconAag.displayName = 'Aag';

export default IconAag;
