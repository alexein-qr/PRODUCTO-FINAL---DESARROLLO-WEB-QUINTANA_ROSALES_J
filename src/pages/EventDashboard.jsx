import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Grid, Card, CardContent, CardActions, Button, Chip, CircularProgress, Box } from '@mui/material';
import { eventService } from '../services/api'; // Importamos nuestro servicio de Axios

function EventDashboard() {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true); // Estado para mostrar una animación de carga

  // Este bloque ejecuta la llamada a la API apenas se abre la página
  useEffect(() => {
    const cargarEventos = async () => {
      try {
        const datos = await eventService.getAll();
        setEventos(datos);
      } catch (error) {
        console.error("Error al traer los eventos de la API:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarEventos();
  }, []);

  // Función para simular la eliminación de un evento
  const handleEliminar = async (id) => {
    try {
      await eventService.delete(id);
      // Filtramos el estado para desaparecerlo de la pantalla de inmediato
      setEventos(eventos.filter(evento => evento.id !== id));
      alert("Evento eliminado correctamente del servidor.");
    } catch (error) {
      alert("No se pudo eliminar el evento.");
    }
  };

  const eventosFiltrados = eventos.filter(evento =>
    evento.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Gestión de Eventos Académicos
      </Typography>

      <TextField
        label="Buscar evento por título..."
        variant="outlined"
        fullWidth
        margin="normal"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Si la API está demorando en responder, mostramos un círculo de carga */}
      {cargando ? (
        <Box display="flex" justifyContent="center" style={{ marginTop: '3rem' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3} style={{ marginTop: '1rem' }}>
          {eventosFiltrados.map((evento) => (
            <Grid item xs={12} sm={6} md={4} key={evento.id}>
              <Card elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Chip label={evento.tipo} color="secondary" size="small" style={{ marginBottom: '0.5rem' }} />
                  <Typography variant="h6" component="h2" gutterBottom>
                    {evento.titulo}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <strong>Fecha:</strong> {evento.fecha}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    <strong>Ponente:</strong> {evento.ponente}
                  </Typography>
                </CardContent>
                <CardActions style={{ flexDirection: 'column', gap: '8px' }}>
                  <Button size="small" color="primary" variant="contained" fullWidth>
                    Inscribirse
                  </Button>
                  <Button size="small" color="error" variant="outlined" fullWidth onClick={() => handleEliminar(evento.id)}>
                    Eliminar Evento
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default EventDashboard;