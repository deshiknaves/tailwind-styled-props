import { Box } from './Box'
import { NotBox } from './NotBox'

export default function Home() {
  return (
    <>
      <Box pl="72px" py={2} h={20} aspect="video" style={{ background: 'red' }}>
        This is a box
      </Box>
      <NotBox py="120px">What</NotBox>
    </>
  )
}
