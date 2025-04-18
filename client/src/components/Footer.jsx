import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, HelpOutline  } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <BottomNavigation
        showLabels
        sx={{
          maxWidth: "600px",
            position: "fixed",
            bottom: 0,
            width: "100%",
            height:'100px',
            left: "50%",
            transform: "translateX(-50%)",
            display:'flex',
          }}
        >
      <BottomNavigationAction
        label="Home"
        icon={<Home color="primary" sx={{ fontSize: 45 }}/>}
        component={Link} to="/"
        />
      <BottomNavigationAction
        label="Ajustes"
        icon={<SettingsIcon  color="secondary" sx={{ fontSize: 45 }}/>}
        component={Link} to="/ajustes"
        />
    </BottomNavigation>
  );
};

export default Footer;