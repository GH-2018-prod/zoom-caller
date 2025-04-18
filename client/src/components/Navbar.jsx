import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import logo from "../assets/logo.png"

const Navbar = () => {
  const { name } = useSelector( state => state.auth.user )
  return (
    <AppBar
      color="default"
      sx={{
        display: 'flex',
        position: "fixed",
        maxWidth: '600px',
        width: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 0,
        height: '100px',
        borderRadius: '30px 30px 45px 45px',
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          justifySelf: 'center'
        }}>
        <img
          width={60}
          height={60}
          src={logo}
          alt="Logo image"
        />
        <Typography variant="h6">
          Bienvenido, { name }!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
