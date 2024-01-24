'use client'

import { ReactNode } from 'react'

export type BoxProps = {
  className?: string
  children?: ReactNode
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
}
export function Box({ children, className, ...props }: BoxProps) {
  const classNames = Object.entries(props).reduce((acc, [key, value]) => {
    if (value === undefined) return acc
    if (typeof value === 'number') {
      return `${acc} ${key}-${value}`
    }
    return `${acc} ${key}-[${value}]`
  }, className || '')

  return <div className={classNames}>{children}</div>
}
