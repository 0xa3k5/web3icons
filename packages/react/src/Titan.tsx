
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTitan = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18 12a6 6 0 0 1-10.453 4.021c-.42.092-.807.167-1.152.226-.789.086-2.4-.008-2.53-1.074-.12-.97 1.252-2.224 2.142-2.872Q6 12.15 6 12a6 6 0 0 1 10.298-4.187c4.201-.674 4.134 1.03 3.572 1.971-.488.687-1.131 1.318-1.879 1.895Q18 11.838 18 12m-6 4.286c-.909 0-1.75-.283-2.444-.765a36 36 0 0 0 3.244-1.07l-.78-1.467-.285.13c-.94.44-3.494 1.37-6.19 1.574.426-.392 1.404-1.233 2.25-1.692l.033-.008a4.286 4.286 0 0 1 8.325-2.049q-.768.483-1.583.884l-.447.204.429 1.682q.84-.39 1.647-.847a4.29 4.29 0 0 1-4.2 3.424m5.622-6.387a6 6 0 0 0-.277-.627c.357-.039.84-.087 1.086-.099-.154.165-.428.42-.81.726" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M13.286 15a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429m0-.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#TITAN__a)" d="M18 12a6 6 0 0 1-10.453 4.021c-.42.092-.807.167-1.151.226-.79.086-2.4-.008-2.531-1.074-.12-.97 1.253-2.224 2.143-2.872Q6 12.15 6 12a6 6 0 0 1 10.298-4.187c4.202-.674 4.134 1.03 3.572 1.971-.487.687-1.13 1.318-1.878 1.895Q18 11.838 18 12m-6 4.286c-.908 0-1.75-.283-2.443-.765a36 36 0 0 0 3.243-1.07l-.78-1.467-.285.13c-.94.44-3.494 1.37-6.189 1.574.426-.392 1.404-1.233 2.249-1.692l.034-.008a4.286 4.286 0 0 1 8.325-2.049 18 18 0 0 1-1.583.884l-.447.204.428 1.682q.842-.39 1.647-.847A4.29 4.29 0 0 1 12 16.286m5.622-6.387a6 6 0 0 0-.277-.627c.357-.039.84-.087 1.086-.099a8 8 0 0 1-.809.726" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#TITAN__b)" d="M13.286 15a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429m0-.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="TITAN__a" x1="4.373" x2="20.23" y1="15.609" y2="8.635" gradientUnits="userSpaceOnUse">
            <stop stopColor="#04D9FF"/>
            <stop offset=".782" stopColor="#445CFE"/>
            <stop offset="1" stopColor="#7269EF"/>
        </linearGradient>
        <linearGradient id="TITAN__b" x1="11.299" x2="15.194" y1="14.383" y2="12.611" gradientUnits="userSpaceOnUse">
            <stop stopColor="#05D5FF"/>
            <stop offset="1" stopColor="#3A5EF4"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconTitan.displayName = 'Titan';

export default IconTitan;
