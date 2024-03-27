
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconJewel = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#JEWEL__a)" d="M8.142 8.572h7.286v6.857H8.142z"/>
    <path fill="#B5F759" d="m9 13.286-2.572 1.071V9.43L9 10.929z"/>
    <path fill="#2AB059" d="m15.214 10.714 2.571-1.071v4.929l-2.571-1.5z"/>
    <path fill="#26A379" d="m15.214 13.286 2.576 1.058-3.485 3.489-.758-2.88z"/>
    <path fill="#E5FF9E" d="M9 10.714 6.424 9.656l3.484-3.489.759 2.88z"/>
    <path fill="#60E840" d="M10.525 15.214 9.407 17.77 6 14.207l2.897-.694zm2.94-6.291 1.115-2.55L18 9.643l-2.906.986z"/>
    <path fill="#B5F759" d="M10.714 8.786 9.642 6.214h4.929l-1.5 2.572z"/>
    <path fill="#2AB059" d="m13.285 15 1.072 2.572H9.428l1.5-2.572z"/>
    <path fill="#F0F3FA" d="m13.714 8.572 1.714 1.714 2.383-.99.206.471-2.589 1.162v2.143l2.58 1.118-.206.472-2.374-.948-1.714 1.715L14.785 18h-.643l-1.071-2.571h-2.143L9.857 18h-.643l1.071-2.571-1.714-1.715-2.259.956-.205-.471 2.464-1.127v-2.143L6.102 9.763l.206-.472 2.263.995 1.714-1.714-.943-2.366L9.81 6l1.118 2.572h2.143l1.2-2.55.471.205zm-4.5 1.928 1.928 4.5h-.428l-1.5-1.5zm3.643 4.5-2.572-5.57.429-.215 2.571 5.572zm.428-5.786 1.5 1.286v3l-.844.857-2.37-5.143z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#JEWEL__b)" d="M15 4.714 19.285 9v6L15 19.286H9L4.714 15V9L9 4.714zm-.858 1.715.858.857-.215 2.01L16.714 9l.857.857v4.286l-.857.857-1.929-.214.215 1.928-.858.858H9.857L9 16.714l.214-1.928L6.857 15l-.429-.471V9.857L7.285 9l1.929.214L9 7.286l.857-.857z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#JEWEL__c)" d="m14.785 5.143 4.072 4.071v5.572l-4.072 4.071H9.214l-4.072-4.071V9.214l4.072-4.071zM14.571 6l.857.857-.214 1.929 1.928-.214.858.857v5.143l-.858.857-1.928-.215.214 1.929-.857.857H9.428l-.857-.857.214-1.929-1.928.215L6 14.572V9.429l.857-.857 1.928.214-.214-1.929L9.428 6z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#FFD464" d="m14.644 5.829.964.964-.201 1.8 1.8-.201.964.964v5.288l-.964.965-1.8-.202.201 1.8-.964.965H9.355l-.964-.965.201-1.8-1.8.202-.964-.965V9.356l.964-.964 1.8.2-.201-1.8.964-.963zM8.785 8.786l-1.928-.214L6 9.429v5.143l.857.857 1.928-.215-.214 1.929.857.857h5.143l.857-.857-.214-1.929 1.928.215.858-.857V9.429l-.858-.857-1.928.214.214-1.929L14.571 6H9.428l-.857.857zm5.927-3.472H9.287L5.314 9.287v5.426l3.973 3.973h5.425l3.973-3.973V9.287zm4.145 3.9-4.072-4.071H9.214L5.142 9.214v5.572l4.072 4.071h5.571l4.072-4.071z" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="JEWEL__a" x1="8.571" x2="17.825" y1="6.08" y2="17.838" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DCFA9C"/>
            <stop offset=".45" stopColor="#81F045"/>
            <stop offset=".95" stopColor="#3FB66B"/>
        </linearGradient>
        <linearGradient id="JEWEL__b" x1="6.857" x2="17.357" y1="6.429" y2="17.357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F3DF6D"/>
            <stop offset="1" stopColor="#C4732D"/>
        </linearGradient>
        <linearGradient id="JEWEL__c" x1="6.535" x2="17.009" y1="6.991" y2="17.464" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCFA95"/>
            <stop offset="1" stopColor="#F09A4F"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconJewel.displayName = 'Jewel';

export default IconJewel;
