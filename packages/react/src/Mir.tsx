
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMir = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m5.583 7.425 4.59-1.929c.67-.266 2.301-.64 3.46 0 1.159.642 1.132 1.361.975 1.64l4.063.903-1.666.888-3.564-.888-1.269.5 2.666 1.465-2.192 1.19zm4.13-.232 1.577-.65c.198-.072.651-.172.885 0 .291.213.127.48-.138.65-.21.135-.847.424-1.139.552z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M5.143 8.169v7.312l1.714.881v-4.33l1.22 2.84 1.78-1.57v4.657l2.572 1.326v-7.43l-2.412-1.132-1.633 1.248L6.86 9.068zM18.857 8.812l-6 2.97v1.785L15 12.532v3.734l-2.143 1.05v1.77l6-3.165v-1.754l-1.714 1.004v-3.734l1.714-.9z"/>
        </>
      ) : (
        <>
          <path fill="#01D8DD" d="m5.583 7.425 4.589-1.929c.67-.266 2.302-.64 3.46 0 1.16.642 1.133 1.361.975 1.64l4.063.903-1.666.888-3.563-.888-1.27.5 2.666 1.465-2.191 1.19zm4.13-.232 1.577-.65c.197-.072.65-.172.884 0 .292.213.127.48-.137.65-.211.135-.848.424-1.14.552z" fillRule="evenodd" clipRule="evenodd"/><path fill="#00A3FE" d="M5.143 8.169v7.312l1.714.881v-4.33l1.22 2.84 1.78-1.57v4.657l2.571 1.326v-7.43l-2.411-1.132-1.633 1.248-1.526-2.903z"/><path fill="#0061FE" d="m18.857 8.812-6 2.97v1.785L15 12.532v3.734l-2.143 1.05v1.77l6-3.165v-1.754l-1.714 1.004v-3.734l1.714-.9z"/>
        </>
      )}
    </BaseIcon>
));

IconMir.displayName = 'Mir';

export default IconMir;
