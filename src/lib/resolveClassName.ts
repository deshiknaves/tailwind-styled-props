import { aspectRatio } from './aspectRatio'

export function resolveClassName(prop: string, value: string | number) {
  switch (prop) {
    case 'aspect':
      return aspectRatio(value)
    default:
      if (typeof value === 'number') {
        return `${prop}-${value}`
      }

      return `${prop}-[${value}]`
  }
}
