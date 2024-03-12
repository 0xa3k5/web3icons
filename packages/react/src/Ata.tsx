
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAta = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#ATA__a)" d="M15.437 6.626a4.745 4.745 0 0 0-7.586.943l-2.096 3.72a5 5 0 0 0-.274.565l.009.017c.21.887.814 2.957 3.398 3.27.142.018.27.026.395.026a1.187 1.187 0 0 1-1.025-1.774l2.897-5.049c.099-.171.318-.385.463-.484.716-.771 1.946-1.539 3.819-1.234"/><path fill="url(#ATA__b)" d="M15.437 6.626c.261.274.518.587.72.943l2.1 3.72c1.453 2.58.128 5.751-2.357 6.801l-.596.167c1.779-1.899 1.363-3.969.866-4.834a1 1 0 0 0-.069-.142l-2.884-4.967a1.196 1.196 0 0 0-1.616-.437 3.82 3.82 0 0 1 3.836-1.251"/><path fill="url(#ATA__c)" d="M15.325 18.244c1.779-1.898 1.389-3.865.896-4.735.322.762-.287 1.491-1.148 1.491H8.995c-2.584-.317-3.274-2.169-3.488-3.056l-.017-.094c-1.247 3.043.981 6.579 4.41 6.579h4.063c.544 0 .964-.099 1.358-.185z"/><defs><linearGradient id="ATA__a" x1="13.81" x2="6.142" y1="5.649" y2="16.787" gradientUnits="userSpaceOnUse"><stop stopColor="#FCCA02"/><stop offset="1" stopColor="#AB1414"/></linearGradient><linearGradient id="ATA__b" x1="8.283" x2="13.265" y1="5.146" y2="19.091" gradientUnits="userSpaceOnUse"><stop offset=".05" stopColor="#AA1215"/><stop offset=".93" stopColor="#FDCB02"/></linearGradient><linearGradient id="ATA__c" x1="5.138" x2="16.354" y1="16.02" y2="16.02" gradientUnits="userSpaceOnUse"><stop offset=".16" stopColor="#FCCA02"/><stop offset="1" stopColor="#AB1414"/></linearGradient></defs>
    </BaseIcon>
));

IconAta.displayName = 'Ata';
IconAta.variants = 'branded';

export default IconAta;
