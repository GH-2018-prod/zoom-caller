import Navbar from '../components/Navbar'
import CallCard from '../components/CallCard'
import Footer from '../components/Footer'
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container
            sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            borderRadius: '16px',
            paddingBottom:'100px',
            paddingTop:'50px'
        }}>
            <Navbar />
            <Typography paddingTop='60px'>Todays's lessons </Typography>
            <CallCard />
            <Footer />
        </Container>
    );
};

export default Home;
