import { Box, BoxProps } from './Box'

export function NotBox({ children, ...props }: BoxProps) {
  return <Box {...props}>{children}</Box>
}
