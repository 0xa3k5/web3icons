
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRsr = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M8.807 5.143h1.673c.068-.003.225.062.234.35.008.287.003 1.704 0 2.42l-.002.012c-.007.079-.02.21.166.219.197.008 1.566.003 2.226 0 .13-.001.181-.075.181-.231V5.416c0-.09.1-.272.279-.272h1.658a.28.28 0 0 1 .206.272v2.496c.01.08.1.232.212.232h2.076c.133 0 .283.085.283.234v1.69c-.004.073-.066.217-.283.217H15.64c-.057.003-.212.035-.212.22v3.006a.23.23 0 0 0 .212.203c.138.008 1.441.003 2.076 0 .094.013.283.09.283.299v1.618c-.017.073-.098.227-.283.227H15.64c-.057.008-.212.052-.212.192v2.603c-.006.068-.019.205-.184.205h-1.742c-.057-.015-.217-.077-.217-.205V16.05c-.006-.067-.022-.193-.216-.193h-2.18c-.063.013-.168.063-.175.193s-.003 1.768 0 2.603c-.009.068-.083.205-.22.205h-1.76c-.06-.008-.163-.06-.163-.205V16.05c.005-.067-.045-.193-.23-.193H6.177c-.062-.008-.185-.079-.178-.26a100 100 0 0 0 0-1.662c.032-.074.14-.221.309-.221H8.34c.072-.008.23-.08.23-.315v-2.752c.004-.08-.008-.362-.29-.362H6.309c-.106 0-.308-.01-.308-.306V8.415c.013-.088.082-.272.253-.272H8.28l.022-.002c.113-.008.268-.02.268-.308V5.416c-.015-.091.054-.273.236-.273m2.047 5.143h2.252a.24.24 0 0 1 .178.242c-.007.153-.003 2.07 0 3.009.01.056-.011.169-.178.175-.167.007-1.57.003-2.252 0-.05 0-.14-.068-.14-.175v-3.093c0-.076.047-.158.14-.158" fillRule="evenodd" clipRule="evenodd"/>

    </BaseIcon>
));

IconRsr.displayName = 'Rsr';

export default IconRsr;