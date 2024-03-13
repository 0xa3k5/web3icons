
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNpxs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12.54 12 6.227 6.227-.54.54L12 12.539l-6.227 6.228-.54-.54L11.462 12 5.234 5.773l.54-.54L12 11.462l6.227-6.227.54.54z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m9.832 12 2.047-2.038L13.917 12l-2.038 2.039z"/><path fill="currentColor" d="M11.879 9.423 14.456 12l-2.577 2.577L9.292 12zM10.373 12l1.505 1.5 1.5-1.5-1.5-1.499z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#FCD309" d="m12.54 12 6.226 6.227-.54.54L12 12.539l-6.227 6.228-.54-.54L11.461 12 5.233 5.773l.54-.54L12 11.462l6.226-6.227.54.54z" fillRule="evenodd" clipRule="evenodd"/><path fill="#FCD309" d="m9.831 12 2.047-2.038L13.916 12l-2.038 2.039z"/><path fill="url(#NPXS__a)" d="M11.878 9.423 14.455 12l-2.577 2.577L9.291 12zM10.372 12l1.505 1.5 1.5-1.5-1.5-1.499z" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="NPXS__a" x1="10.252" x2="15.564" y1="10.316" y2="16.43" gradientUnits="userSpaceOnUse"><stop stopColor="#1A1E21"/><stop offset="1" stopColor="#06060A"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconNpxs.displayName = 'Npxs';

export default IconNpxs;
