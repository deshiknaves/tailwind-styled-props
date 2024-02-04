'use client'

import { resolveClassName } from '@/lib/resolveClassName'
import { CSSProperties, ReactNode } from 'react'

export type BoxProps = {
  aspect?: string
  className?: string
  children?: ReactNode
  w?: number | string
  h?: number | string
  px?: number | string
  py?: number | string
  p?: number | string
  pl?: number | string
  pr?: number | string
  pt?: number | string
  pb?: number | string
  mx?: number | string
  my?: number | string
  m?: number | string
  ml?: number | string
  mr?: number | string
  mt?: number | string
  mb?: number | string
  style?: CSSProperties
}
export function Box({ children, className, style, ...props }: BoxProps) {
  const classNames = Object.entries(props).reduce((acc, [key, value]) => {
    if (value === undefined) return acc

    return `${acc} ${resolveClassName(key, value)}`
  }, className || '')

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}
