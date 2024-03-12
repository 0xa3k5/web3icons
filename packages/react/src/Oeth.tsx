
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOeth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0M8.914 9.023c-.77.8-1.2 1.867-1.2 2.977a4.28 4.28 0 0 0 3.686 4.286l.93-1.312-.006.001 1.819-2.546L12 13.744 9.857 12.43l1.826 2.556A2.95 2.95 0 0 1 9.25 13.23 3 3 0 0 1 9 12a3 3 0 0 1 1.934-2.803l.913-1.483c-1.11.04-2.161.51-2.932 1.309m6.145 5.98a4.29 4.29 0 0 1-2.978 1.283l1.115-1.535a3 3 0 0 0-.92-5.738L14.143 12 12 13.286 9.857 12l1.862-2.979h-.002l.793-1.307A4.256 4.256 0 0 1 16.286 12c0 1.123-.44 2.2-1.227 3.002" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#0074F0" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"/><path fill="#3390F3" d="M16.542 16.543A6.429 6.429 0 1 0 7.401 7.5l9.146 9.043z"/><path fill="#fff" d="M7.714 12a4.286 4.286 0 0 1 4.132-4.286l-.913 1.483A3 3 0 0 0 9 12a2.957 2.957 0 0 0 3.33 2.974l-.93 1.312A4.28 4.28 0 0 1 7.714 12"/><path fill="#fff" d="M12.081 16.286A4.286 4.286 0 0 0 16.286 12a4.256 4.256 0 0 0-3.776-4.286l-.793 1.307c.111-.012.167-.02.283-.02a3 3 0 0 1 1.196 5.75z"/><path fill="#CEE5FD" d="M12 13.286v-2.143L9.857 12z"/><path fill="#E5F1FE" d="M12 13.286v-2.143l2.143.857zM12 11.143V8.57l-2.143 3.43z"/><path fill="#fff" d="M12 11.143V8.57l2.143 3.43z"/><path fill="#E5F1FE" d="M12 15.429v-1.685l2.143-1.315z"/><path fill="#fff" d="M12 15.429v-1.685L9.857 12.43z"/>
        </>
      )}
    </BaseIcon>
));

IconOeth.displayName = 'Oeth';
IconOeth.variants = 'brandedmono';

export default IconOeth;
