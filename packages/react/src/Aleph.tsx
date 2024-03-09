
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAleph = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M17.417 16.209A6.857 6.857 0 0 0 7.346 6.964l.578.579a.571.571 0 0 1-.805.81l-.545-.544a6.857 6.857 0 0 0 3.999 10.898.6.6 0 0 1 .172-.304l1.812-1.817a.643.643 0 1 1 .909.908l-1.363 1.363a6.83 6.83 0 0 0 4.539-1.808l-.472-.472a.573.573 0 1 1 .806-.814zm-7.131-6.566a1.071 1.071 0 1 1-2.143 0 1.071 1.071 0 0 1 2.143 0m.596-2.237a.57.57 0 1 0 .805.805l1.616-1.615a.57.57 0 1 0-.806-.806zm-.047 3.471a.57.57 0 0 1 .805 0l1.62 1.62a.571.571 0 0 1-.81.806l-1.615-1.616a.57.57 0 0 1 0-.805zm5.022 3.909a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <g clipPath="url(#ALEPH__a)"><path fill="#0055FE" d="M0 0h24v24H0z"/><path fill="#fff" d="M17.417 16.209A6.857 6.857 0 0 0 7.346 6.964l.578.579a.571.571 0 0 1-.805.81l-.545-.544a6.857 6.857 0 0 0 3.999 10.898.6.6 0 0 1 .172-.304l1.812-1.817a.643.643 0 1 1 .909.908l-1.363 1.363a6.83 6.83 0 0 0 4.539-1.808l-.472-.472a.573.573 0 1 1 .806-.814zm-7.131-6.566a1.071 1.071 0 1 1-2.143 0 1.071 1.071 0 0 1 2.143 0m.596-2.237a.57.57 0 1 0 .805.805l1.616-1.615a.57.57 0 1 0-.806-.806zm-.047 3.471a.57.57 0 0 1 .805 0l1.62 1.62a.571.571 0 0 1-.81.806l-1.615-1.616a.57.57 0 0 1 0-.805zm5.022 3.909a1.072 1.072 0 1 1-2.143 0 1.072 1.072 0 0 1 2.143 0" fillRule="evenodd" clipRule="evenodd"/></g><defs><clipPath id="ALEPH__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAleph.displayName = 'Aleph';

export default IconAleph;
