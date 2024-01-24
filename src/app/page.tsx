import { Box } from './Box'
import { NotBox } from './NotBox'

export default function Home() {
  return (
    <>
      <Box pl="72px" py={2}>
        This is a box
      </Box>
      <NotBox py="120px">What</NotBox>
    </>
  )
}
