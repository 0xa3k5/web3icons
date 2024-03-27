
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPawth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.429 13.003v3.133L12 17.319V14.18zm5.143 3.133L12 17.319V14.18l2.572-1.178zm-5.143-3.133-2.452 4.311 2.452-1.178z"/>
    <path fill="currentColor" d="M9.429 18.857 12 17.314l-2.57-1.178zm-2.452-1.543 2.452 1.543v-2.721l-2.452 1.183zm7.595-4.311v3.133l2.45 1.183z"/>
    <path fill="currentColor" d="m14.572 18.857 2.45-1.543-2.45-1.174zM12 17.314l2.572 1.543v-2.721L12 17.319zm0-5.85-2.57 1.543L12 14.19zm2.572 1.539L12 11.46v2.721zM6.857 8.7v2.507L9 12.15zm0 0-2.143 3.454 2.143-.943z"/>
    <path fill="currentColor" d="M6.857 13.384 9 12.15l-2.143-.943z"/>
    <path fill="currentColor" d="m4.714 12.154 2.143 1.23v-2.177l-2.143.943zm2.143 1.624v1.706l2.147-2.931-2.142 1.225z"/>
    <path fill="currentColor" d="M6.857 15.484v-1.706l-2.143-1.23zM17.143 8.7v2.507l2.139.943z"/>
    <path fill="currentColor" d="m17.143 8.7-2.139 3.454 2.143-.943V8.7z"/>
    <path fill="currentColor" d="m17.143 13.384 2.143-1.234-2.143-.943z"/>
    <path fill="currentColor" d="m15.004 12.154 2.143 1.23v-2.177l-2.143.943zm2.139 1.624v1.706l2.143-2.931z"/>
    <path fill="currentColor" d="M17.143 15.484v-1.706l-2.139-1.23 2.143 2.936zM9.429 4.286v2.507l2.01.943z"/>
    <path fill="currentColor" d="M9.429 4.286 7.419 7.74l2.014-.943V4.286z"/>
    <path fill="currentColor" d="m9.429 8.97 2.01-1.234-2.01-.943z"/>
    <path fill="currentColor" d="m7.419 7.74 2.014 1.23V6.793l-2.014.943zm2.01 1.624v1.706l2.014-2.936z"/>
    <path fill="currentColor" d="M9.429 11.07V9.364l-2.01-1.23 2.014 2.936zm5.143-6.784v2.507l2.014.943zm0 0L12.566 7.74l2.005-.943zm0 4.684 2.014-1.234-2.014-.943z"/>
    <path fill="currentColor" d="m12.562 7.74 2.014 1.23V6.793l-2.014.943zm2.01 1.624v1.706l2.014-2.936zm0 1.706V9.364l-2.006-1.23z"/>

        </>
      ) : (
        <>
          
    <path fill="#FF65B3" d="M9.428 13.003v3.133L12 17.319V14.18z"/>
    <path fill="#FFBDDE" d="M14.571 16.136 12 17.319V14.18l2.571-1.178zm-5.143-3.133-2.451 4.311 2.451-1.178z"/>
    <path fill="#FF349B" d="M9.428 18.857 12 17.314l-2.572-1.178z"/>
    <path fill="#FF65B3" d="m6.977 17.314 2.451 1.543v-2.721l-2.451 1.183zm7.594-4.311v3.133l2.451 1.183z"/>
    <path fill="#FF349B" d="m14.571 18.857 2.451-1.543-2.451-1.174z"/>
    <path fill="#FF65B3" d="m12 17.314 2.571 1.543v-2.721L12 17.319z"/>
    <path fill="#FF349B" d="m12 11.464-2.572 1.543L12 14.19z"/>
    <path fill="#FF65B3" d="M14.571 13.003 12 11.46v2.721zM6.857 8.7v2.507L9 12.15z"/>
    <path fill="#FFBDDE" d="m6.857 8.7-2.143 3.454 2.143-.943z"/>
    <path fill="#FF349B" d="M6.857 13.384 9 12.15l-2.143-.943z"/>
    <path fill="#FF65B3" d="m4.714 12.154 2.143 1.23v-2.177l-2.143.943zm2.143 1.624v1.706l2.147-2.931-2.143 1.225z"/>
    <path fill="#FFBDDE" d="M6.857 15.484v-1.706l-2.143-1.23z"/>
    <path fill="#FF65B3" d="M17.142 8.7v2.507l2.139.943z"/>
    <path fill="#FFBDDE" d="m17.142 8.7-2.138 3.454 2.143-.943V8.7z"/>
    <path fill="#FF349B" d="m17.142 13.384 2.143-1.234-2.143-.943z"/>
    <path fill="#FF65B3" d="m15.004 12.154 2.143 1.23v-2.177l-2.143.943zm2.138 1.624v1.706l2.143-2.931z"/>
    <path fill="#FFBDDE" d="M17.142 15.484v-1.706l-2.138-1.23 2.143 2.936z"/>
    <path fill="#FF65B3" d="M9.428 4.286v2.507l2.01.943z"/>
    <path fill="#FFBDDE" d="M9.428 4.286 7.418 7.74l2.014-.943V4.286z"/>
    <path fill="#FF349B" d="m9.428 8.97 2.01-1.234-2.01-.943z"/>
    <path fill="#FF65B3" d="m7.418 7.74 2.014 1.23V6.793l-2.014.943zm2.01 1.624v1.706l2.014-2.936z"/>
    <path fill="#FFBDDE" d="M9.428 11.07V9.364l-2.01-1.23 2.014 2.936z"/>
    <path fill="#FF65B3" d="M14.571 4.286v2.507l2.014.943z"/>
    <path fill="#FFBDDE" d="M14.571 4.286 12.565 7.74l2.006-.943z"/>
    <path fill="#FF349B" d="m14.571 8.97 2.014-1.234-2.014-.943z"/>
    <path fill="#FF65B3" d="m12.561 7.74 2.014 1.23V6.793l-2.014.943zm2.01 1.624v1.706l2.014-2.936z"/>
    <path fill="#FFBDDE" d="M14.571 11.07V9.364l-2.006-1.23z"/>

        </>
      )}
    </BaseIcon>
));

IconPawth.displayName = 'Pawth';

export default IconPawth;
