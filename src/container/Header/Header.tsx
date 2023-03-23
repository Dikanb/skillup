import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import "./Header.scss"
import Logo from 'components/Logo/Logo';


type Props = {}
const Header = (props: Props) => {

  return (
    <AppBar
      position="static" className='app-bar'>
  <Container>
    <Toolbar>
      <IconButton>
        
      </IconButton>
      <Logo/>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Abouth</Button>
      <Button color="inherit">Payment</Button>
      <Button color="inherit">Shiping</Button>
      <Button color="inherit">Cart</Button>
    </Toolbar>
  </Container>
  
</AppBar >)
}
export default Header