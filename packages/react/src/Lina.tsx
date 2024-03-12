
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLina = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M5.69 14.183a1.904 1.904 0 0 1 0-2.672l7.148-7.225.333.337a1.904 1.904 0 0 1 0 2.672L6.024 14.52zM8.26 16.78a1.904 1.904 0 0 1 0-2.672l7.147-7.225.333.337a1.904 1.904 0 0 1 0 2.672l-7.147 7.225zM10.829 16.705a1.904 1.904 0 0 0 0 2.672l.333.337 7.148-7.225a1.904 1.904 0 0 0 0-2.672l-.333-.337z"/>
        </>
      ) : (
        <>
          <path fill="url(#LINA__a)" d="M5.69 14.183a1.904 1.904 0 0 1 0-2.672l7.148-7.225.333.337a1.904 1.904 0 0 1 0 2.672L6.023 14.52z"/><path fill="url(#LINA__b)" d="M8.26 16.78a1.904 1.904 0 0 1 0-2.672l7.147-7.225.333.337a1.904 1.904 0 0 1 0 2.672l-7.148 7.225z"/><path fill="url(#LINA__c)" d="M10.828 16.705a1.904 1.904 0 0 0 0 2.672l.334.337 7.147-7.225a1.904 1.904 0 0 0 0-2.672l-.333-.337z"/><defs><linearGradient id="LINA__a" x1="10.676" x2="21.017" y1="10.739" y2="21.59" gradientUnits="userSpaceOnUse"><stop stopColor="#6BB7FF"/><stop offset="1" stopColor="#053BF7"/></linearGradient><linearGradient id="LINA__b" x1="6.567" x2="16.908" y1="6.823" y2="17.675" gradientUnits="userSpaceOnUse"><stop stopColor="#6BB7FF"/><stop offset="1" stopColor="#053BF7"/></linearGradient><linearGradient id="LINA__c" x1="8.603" x2="15.47" y1="8.566" y2="15.36" gradientUnits="userSpaceOnUse"><stop stopColor="#6BB7FF"/><stop offset="1" stopColor="#053BF7"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLina.displayName = 'Lina';
IconLina.variants = 'brandedmono';

export default IconLina;
