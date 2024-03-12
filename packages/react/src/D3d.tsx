
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconD3d = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m5.156 9.652.398 4.19 2.16 3.704 1.342-1.659-1.727-5.395zM18.827 9.652l-.394 4.19-2.16 3.704-1.358-1.672 1.744-5.382zM14.855 15.943H9.202L7.869 17.61l4.204 1.247 4.072-1.247zM7.316 10.324 5.143 9.54 8.04 6.37l3.9-1.655v2.358l-4.628 3.252zM16.685 10.324l2.172-.784L15.96 6.37l-3.9-1.655v2.358l4.629 3.252z"/><path fill="currentColor" d="m16.569 10.56-4.56-3.274-4.56 3.274 1.74 5.297h5.64l1.744-5.297zm-8.04 2.576 3.48 2.554 3.48-2.554L14.16 9H9.857z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#46B5E0" d="m5.155 9.652.399 4.19 2.16 3.704 1.341-1.659-1.727-5.395z"/><path fill="#0196DA" d="m18.827 9.652-.394 4.19-2.16 3.704-1.359-1.672 1.744-5.382z"/><path fill="#87C9EB" d="M14.854 15.943H9.201L7.868 17.61l4.205 1.247 4.071-1.247z"/><path fill="#E3F4FC" d="M7.315 10.324 5.143 9.54 8.04 6.37l3.9-1.655v2.358L7.31 10.324z"/><path fill="#82CEF0" d="m16.684 10.324 2.173-.784L15.96 6.37l-3.9-1.655v2.358l4.628 3.252z"/><path fill="#B9E2FE" d="m16.568 10.56-4.56-3.274-4.56 3.274 1.74 5.297h5.64l1.745-5.297zm-8.04 2.576 3.48 2.554 3.48-2.554L14.16 9H9.857z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconD3d.displayName = 'D3d';
IconD3d.variants = 'brandedmono';

export default IconD3d;
