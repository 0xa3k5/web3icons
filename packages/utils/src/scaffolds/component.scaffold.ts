const multiVariants = `
import { forwardRef } from 'react';
import { IconComponentProps } from "../../types";
import { BaseIcon } from '../../BaseIcon';

{{jsDocComment}}
const {{componentName}} = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', fallback, ...props }, ref) => (
    <BaseIcon fallback={fallback} {...props} ref={ref}>
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
`

const singleVariant = `
import { forwardRef } from 'react';
import { IconComponentProps } from "../../types";
import { BaseIcon } from '../../BaseIcon';

{{jsDocComment}}
const {{componentName}} = forwardRef<SVGSVGElement, IconComponentProps>(({ fallback, ...props }, ref) => (
    <BaseIcon fallback={fallback} {...props} ref={ref}>
        {{variantJSX}}
    </BaseIcon>
));

{{componentName}}.displayName = '{{displayName}}';

export default {{componentName}};
`

export const componentScaffold = { multiVariants, singleVariant }
