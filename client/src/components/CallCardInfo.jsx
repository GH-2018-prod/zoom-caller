import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';

const CallCardInfo = () => {

  const { schedule, teacher, level } = useSelector(state => state.auth.user.details)

  return (
    <>
      { Array.isArray(schedule) && schedule.map((item, index) => (
    <Card
      key={ index }
      sx={{
      mt: 8,
      height: "150px",
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // alignItems: 'center',
      borderRadius: '16px'

    }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'space-between',
          justifyContent: 'space-around'
        }}
      >
        <Box sx={{ mb: 2, textAlign: 'left' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.2, mb: 0.5, }}>
            <strong>Profesor:</strong> { teacher }
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.2, mb: 0.5 }}>
            <strong>Nivel:</strong> { level }
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.2 }}>
            <strong>Horario:</strong> {item.day}, {item.time}
          </Typography>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            CONECTARSE
          </Button>
        </Box>

      </CardContent>
    </Card>
    ))}
    </>
  );
};

export default CallCardInfo;