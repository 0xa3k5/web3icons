const multiVariants = `
import { forwardRef } from 'react';
import { IconComponentProps } from "../../types";
import { BaseIcon } from '../../BaseIcon';

export const {{componentName}} = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
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
`

const singleVariant = `
import { forwardRef } from 'react';
import { IconComponentProps } from "../../types";
import { BaseIcon } from '../../BaseIcon';

export const {{componentName}} = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        {{variantJSX}}
    </BaseIcon>
));

{{componentName}}.displayName = '{{displayName}}';
`

export const componentScaffold = { multiVariants, singleVariant }
