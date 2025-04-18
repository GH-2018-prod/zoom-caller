import { Card, CardContent, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const CallCard = () => {

  //const { level } = useSelector( state => state.auth.user )
  const { teacher, schedule, level }  = useSelector( state => state.auth.user.details)

  // Obtener el día de la semana actual (ej: "Monday")
  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];

  // Buscar el horario correspondiente al día de hoy
  const todaySchedule = schedule.find(item => item.day === today);

  return (
    <Card sx={{
      mt: 8,
      height: "250px",
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '16px'

      }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'space-around'
        }}
      >
        <Typography variant="body1"> <strong>Teacher:</strong> { teacher } </Typography>
        <Typography variant="body1"> <strong>Class:</strong> { level } </Typography>
        
        {todaySchedule ? (
          <Typography variant="body1">
            <strong>Schedule:</strong> {todaySchedule.time}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No hay clase programada para hoy.
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          sx={{width: "100%" }}
          href={ todaySchedule ? todaySchedule.url : null }
          target="_blank"
          rel="noopener noreferrer"
          disabled={ !todaySchedule }
          >
          CONECTARSE
        </Button>
      </CardContent>
    </Card>
  );
};

export default CallCard;
