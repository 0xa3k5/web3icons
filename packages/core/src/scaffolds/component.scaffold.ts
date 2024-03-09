export const componentScaffold = `
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const {{componentName}} = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          {{monoJSX}}
        </>
      ) : (
        <>
          {{brandedJSX}}
        </>
      )}
    </BaseIcon>
));

{{componentName}}.displayName = '{{displayName}}';

export default {{componentName}};
`;
