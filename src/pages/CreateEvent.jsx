import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem, Paper } from '@mui/material';

const tiposDeEvento = ['Conferencia', 'Taller', 'Seminario'];

function CreateEvent() {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: 'Conferencia',
    fecha: '',
    ponente: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del nuevo evento a enviar al backend:", formData);
    alert(`¡Evento "${formData.titulo}" registrado con éxito! (Verifica la consola)`);
    
    // Limpiar el formulario
    setFormData({ titulo: '', tipo: 'Conferencia', fecha: '', ponente: '' });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
          Registrar Nuevo Evento Académico
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Título del Evento"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />
          
          <TextField
            select
            margin="normal"
            required
            fullWidth
            label="Tipo de Evento"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            {tiposDeEvento.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Fecha"
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Expositor / Ponente"
            name="ponente"
            value={formData.ponente}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Guardar Evento
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CreateEvent;