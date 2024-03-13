
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEpik = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12 19.714a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428m0-.857a6.857 6.857 0 1 0 0-13.715 6.857 6.857 0 0 0 0 13.715" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M11.572 7.491c0-.351.282-.634.63-.634h.655V16.3a.843.843 0 0 1-.844.844h-.441z"/><path fill="currentColor" d="M14.143 11.332h-.146c-2.04 0-3.938 0-3.938-1.33 0-1.473 3.128-1.212 4.397-.6.24.117.578.095.745-.115l.343-.428a.197.197 0 0 0-.055-.3 7.3 7.3 0 0 0-3.36-.845c-2.075 0-3.832.965-3.832 2.293 0 1.016 1.072 1.577 1.68 1.757H9.97c-.622.159-2.023.926-2.023 2.049 0 1.406 1.864 2.473 4.058 2.473 1.56 0 3.073-.592 3.72-.952a.215.215 0 0 0 .06-.321l-.355-.45c-.18-.223-.54-.244-.797-.12-1.338.643-4.706.939-4.706-.63 0-1.389 1.855-1.384 3.973-1.384h.244z"/>
        </>
      ) : (
        <>
          <path fill="#683CA4" d="M12 19.714a7.713 7.713 0 1 0 0-15.427 7.713 7.713 0 0 0 0 15.427m0-.857a6.858 6.858 0 1 0 0-13.715 6.858 6.858 0 0 0 0 13.715" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#EPIK__a)" d="M11.571 7.491c0-.351.283-.634.63-.634h.656V16.3a.843.843 0 0 1-.844.844h-.442z"/><path fill="#FEFCFF" d="M14.143 11.332h-.146c-2.04 0-3.939 0-3.939-1.33 0-1.473 3.129-1.212 4.397-.6.24.117.579.095.746-.115l.343-.428a.197.197 0 0 0-.056-.3 7.3 7.3 0 0 0-3.36-.845c-2.074 0-3.831.965-3.831 2.293 0 1.016 1.071 1.577 1.68 1.757h-.009c-.621.159-2.023.926-2.023 2.049 0 1.406 1.865 2.473 4.059 2.473 1.56 0 3.073-.592 3.72-.952a.215.215 0 0 0 .06-.321l-.356-.45c-.18-.223-.54-.244-.797-.12-1.337.643-4.706.939-4.706-.63 0-1.389 1.856-1.384 3.973-1.384h.245z"/><defs><linearGradient id="EPIK__a" x1="22.429" x2="22.08" y1="7.213" y2="17.449" gradientUnits="userSpaceOnUse"><stop stopColor="#FEFCFF"/><stop offset=".17" stopColor="#FEFCFF" stopOpacity="0"/><stop offset=".24" stopColor="#FEFCFF" stopOpacity="0"/><stop offset=".32" stopColor="#FEFCFF"/><stop offset=".42" stopColor="#FEFCFF" stopOpacity="0"/><stop offset=".58" stopColor="#FEFCFF" stopOpacity="0"/><stop offset=".67" stopColor="#FEFCFF"/><stop offset=".76" stopColor="#FEFCFF" stopOpacity="0"/><stop offset=".84" stopColor="#FEFCFF" stopOpacity="0"/><stop offset="1" stopColor="#FEFCFF"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEpik.displayName = 'Epik';

export default IconEpik;
