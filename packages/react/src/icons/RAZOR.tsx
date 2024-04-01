import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRAZOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.643 9.857a.63.63 0 0 0-.643.617v3.493c.005.339.3.609.652.604a.63.63 0 0 0 .634-.604v-3.493a.63.63 0 0 0-.643-.617M16.5 8.143c-.355 0-.643.274-.643.609v6.908c-.008.339.275.617.63.626.352.008.648-.257.656-.596V8.752c0-.335-.287-.609-.643-.609m-2.143-3c-.355 0-.643.27-.643.609v12.93c0 .334.288.604.643.604s.643-.27.643-.605V5.752c0-.338-.287-.608-.643-.608m-2.142 3.428c-.356 0-.643.261-.643.587v5.682c0 .322.287.588.643.588.355 0 .642-.262.642-.588V9.16c0-.326-.287-.587-.643-.587m-2.142-3.43c-.356 0-.643.27-.643.604v12.939c0 .334.287.604.643.604.355 0 .643-.27.643-.604V5.743c0-.334-.288-.6-.643-.604zM7.929 7.286c-.356 0-.643.266-.643.591v8.675c0 .325.287.591.643.591.355 0 .643-.266.643-.591V7.877c0-.325-.288-.591-.643-.591M5.786 9.857c-.356 0-.643.266-.643.592v3.535c0 .322.287.588.643.588s.643-.266.643-.588V10.45c0-.326-.287-.592-.643-.592"
          />
        </>
      ) : (
        <>
          <path
            fill="#4FA8FF"
            d="M18.643 9.857a.63.63 0 0 0-.643.617v3.493c.004.339.3.609.651.604a.63.63 0 0 0 .634-.604v-3.493a.63.63 0 0 0-.642-.617"
          />
          <path
            fill="url(#RAZOR__a)"
            d="M16.5 8.143c-.356 0-.643.274-.643.609v6.908c-.009.339.274.617.63.626.351.008.647-.257.656-.596V8.752c0-.335-.288-.609-.643-.609"
          />
          <path
            fill="url(#RAZOR__b)"
            d="M14.357 5.143c-.356 0-.643.27-.643.609v12.93c0 .334.287.604.643.604s.643-.27.643-.605V5.752c0-.338-.287-.608-.643-.608"
          />
          <path
            fill="url(#RAZOR__c)"
            d="M12.214 8.572c-.356 0-.643.261-.643.587v5.682c0 .322.287.588.643.588s.643-.262.643-.588V9.16c0-.326-.287-.587-.643-.587"
          />
          <path
            fill="url(#RAZOR__d)"
            d="M10.071 5.143c-.356 0-.643.27-.643.604v12.939c0 .334.287.604.643.604s.643-.27.643-.604V5.743c0-.334-.287-.6-.643-.604z"
          />
          <path
            fill="url(#RAZOR__e)"
            d="M7.928 7.286c-.355 0-.643.266-.643.591v8.675c0 .325.288.591.643.591s.643-.266.643-.591V7.877c0-.325-.287-.591-.643-.591"
          />
          <path
            fill="url(#RAZOR__f)"
            d="M5.785 9.857c-.355 0-.642.266-.642.592v3.535c0 .322.287.588.642.588s.643-.266.643-.588V10.45c0-.326-.287-.592-.643-.592"
          />
          <defs>
            <linearGradient
              id="RAZOR__a"
              x1="-117.314"
              x2="29.797"
              y1="10.859"
              y2="10.859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
            <linearGradient
              id="RAZOR__b"
              x1="-93.763"
              x2="53.37"
              y1="11.447"
              y2="11.447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
            <linearGradient
              id="RAZOR__c"
              x1="-70.145"
              x2="76.894"
              y1="10.675"
              y2="10.675"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
            <linearGradient
              id="RAZOR__d"
              x1="-46.573"
              x2="100.465"
              y1="11.447"
              y2="11.447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
            <linearGradient
              id="RAZOR__e"
              x1="-23.049"
              x2="124.084"
              y1="11.138"
              y2="11.138"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
            <linearGradient
              id="RAZOR__f"
              x1="4.723"
              x2="18.098"
              y1="11.468"
              y2="11.468"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14779A" />
              <stop offset="1" stopColor="#4FA8FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRAZOR.displayName = 'RAZOR'
