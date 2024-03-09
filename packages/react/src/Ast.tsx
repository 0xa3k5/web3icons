
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAst = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M15.459 15.407 12 18.857l-1.714-1.714a10.4 10.4 0 0 0 5.173-1.736m2.854-3.964L12 5.143l-6.313 6.3-.544.557c.291.227.574.463.879.677a10.3 10.3 0 0 0 8.451 1.586 10.3 10.3 0 0 0 3.274-1.432q.584-.379 1.11-.831zm-4.646 2.005a11.9 11.9 0 0 0-6.265-1.757c2.88-1.247 6.415-1.418 9.655.442a9.4 9.4 0 0 1-3.39 1.316"/>
        </>
      ) : (
        <>
          <g clipPath="url(#AST__a)"><path fill="#2B71FF" d="M0 0h24v24H0z"/><path fill="#fff" d="M15.459 15.407 12 18.857l-1.714-1.714a10.4 10.4 0 0 0 5.173-1.736m2.854-3.964L12 5.143l-6.313 6.3-.544.557c.291.227.574.463.879.677a10.3 10.3 0 0 0 8.451 1.586 10.3 10.3 0 0 0 3.274-1.432q.584-.379 1.11-.831zm-4.646 2.005a11.9 11.9 0 0 0-6.265-1.757c2.88-1.247 6.415-1.418 9.655.442a9.4 9.4 0 0 1-3.39 1.316"/></g><defs><clipPath id="AST__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconAst.displayName = 'Ast';

export default IconAst;
