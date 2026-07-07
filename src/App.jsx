import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import EventDashboard from './pages/EventDashboard';
import CreateEvent from './pages/CreateEvent';
import Participants from './pages/Participants'; // Importamos la nueva página

function App() {
  return (
    <Router>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            Eventos UC
          </Typography>
          <Button color="inherit" component={Link} to="/">Ver Eventos</Button>
          <Button color="inherit" component={Link} to="/nuevo-evento">Crear Evento</Button>
          <Button color="inherit" component={Link} to="/participantes">Participantes</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<EventDashboard />} />
          <Route path="/nuevo-evento" element={<CreateEvent />} />
          <Route path="/participantes" element={<Participants />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;