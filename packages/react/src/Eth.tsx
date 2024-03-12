
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEth = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 3.428v6.335l5.357 2.396zM12 3.428l-5.357 8.73L12 9.764zM12 16.264v4.307l5.357-7.414zM12 20.571v-4.307l-5.357-3.107z"/><path fill="currentColor" d="m12 15.266 5.357-3.107L12 9.763zM6.643 12.159 12 15.266V9.763z"/><path fill="currentColor" d="m12 15.266-5.357-3.107L12 3.428l5.357 8.73zM7 11.906l4.916-8.01V9.72zm-.073.218 4.989-2.216v5.109zm5.16-2.216v5.109l4.984-2.893zm0-.188 4.916 2.186-4.916-8.01z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="m12 16.196-5.357-3.043L12 20.57l5.357-7.418zm-4.757-2.508 4.672 2.658v3.814zm4.843 2.658v3.814l4.671-6.472z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#8FFCF3" d="M12 3.428v6.335l5.357 2.396z"/><path fill="#CABCF8" d="m12 3.428-5.357 8.73L12 9.764z"/><path fill="#CBA7F5" d="M12 16.264v4.307l5.357-7.414z"/><path fill="#74A0F3" d="M12 20.571v-4.307l-5.357-3.107z"/><path fill="#CBA7F5" d="m12 15.266 5.357-3.107L12 9.763z"/><path fill="#74A0F3" d="M6.643 12.159 12 15.266V9.763z"/><path fill="#202699" d="m12 15.266-5.357-3.107L12 3.428l5.357 8.73zm-5.002-3.36 4.916-8.01V9.72zm-.073.218 4.989-2.216v5.109zm5.16-2.216v5.109l4.985-2.893zm0-.188 4.916 2.186-4.916-8.01z" fillRule="evenodd" clipRule="evenodd"/><path fill="#202699" d="m12 16.196-5.357-3.043L12 20.57l5.357-7.418zm-4.757-2.508 4.671 2.658v3.814zm4.842 2.658v3.814l4.672-6.472z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconEth.displayName = 'Eth';
IconEth.variants = 'brandedmono';

export default IconEth;
