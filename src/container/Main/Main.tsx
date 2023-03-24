import { Padding } from "@mui/icons-material"
import { Container } from "@mui/material"
import Home from "pages/Home/Home"



type Props = {}

const Main = (props: Props) => {
  return (
   <Container sx={{
    Padding: '40px 0',
   }}>
  <Home/>
  </Container>
  )
}
export default Main