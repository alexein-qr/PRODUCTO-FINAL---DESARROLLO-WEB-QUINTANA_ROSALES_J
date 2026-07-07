import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem } from '@mui/material';

const eventosDisponibles = [
  "Congreso de IA y Robótica 2026",
  "Taller de Desarrollo Web Avanzado",
  "Seminario de Investigación Científica"
];

function Participants() {
  // Lista ficticia de participantes ya inscritos
  const [participantes, setParticipantes] = useState([
    { id: 1, nombre: "Joan Quintana", correo: "joan.quintana@continental.edu.pe", evento: "Congreso de IA y Robótica 2026" },
    { id: 2, nombre: "Ana Martínez", correo: "ana.martinez@continental.edu.pe", evento: "Taller de Desarrollo Web Avanzado" }
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    evento: eventosDisponibles[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Agregar el nuevo participante al estado local
    const nuevoParticipante = {
      id: participantes.length + 1,
      ...formData
    };

    setParticipantes([...participantes, nuevoParticipante]);
    alert(`¡${formData.nombre} inscrito correctamente!`);
    
    // Limpiar campos de nombre y correo
    setFormData({ nombre: '', correo: '', evento: formData.evento });
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Gestión de Participantes
      </Typography>

      {/* Formulario de Inscripción */}
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Inscribir Participante a un Evento
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nombre Completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          <TextField
            select
            margin="normal"
            required
            fullWidth
            label="Seleccionar Evento"
            name="evento"
            value={formData.evento}
            onChange={handleChange}
          >
            {eventosDisponibles.map((evento) => (
              <MenuItem key={evento} value={evento}>
                {evento}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
            Registrar e Inscribir
          </Button>
        </Box>
      </Paper>

      {/* Tabla de Consultas de Inscritos */}
      <Typography variant="h6" gutterBottom fontWeight="bold" style={{ marginTop: '2rem' }}>
        Lista de Participantes Inscritos
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead style={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Correo</strong></TableCell>
              <TableCell><strong>Evento Académico</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participantes.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.nombre}</TableCell>
                <TableCell>{p.correo}</TableCell>
                <TableCell>{p.evento}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Participants;