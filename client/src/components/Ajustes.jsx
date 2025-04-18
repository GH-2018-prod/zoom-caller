import NavbarAjustes from '../components/NavbarAjustes'
import CallCardInfo from '../components/CallCardInfo'
import Footer from '../components/Footer'
import { Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Ajustes = () => {
    const dispatch = useDispatch();
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                borderRadius: '16px',
                paddingBottom: '100px',
                paddingTop: '50px'
            }}
        >
            <NavbarAjustes />
            <CallCardInfo />
            <Typography
                color="secondary"
                sx={{   mt: 8 }}
                onClick={() => dispatch(logout())}>
                Cerrar Sesion
            </Typography>
            <Footer />
        </Container>
    );
};

export default Ajustes;