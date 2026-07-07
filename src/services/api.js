import axios from 'axios';

// Creamos una instancia centralizada de Axios
const api = axios.create({
  // Colocamos una URL base simulada (Placeholder). 
  // Si tu profesor te da un link de backend, solo reemplazas este texto.
  baseURL: 'https://jsonplaceholder.typicode.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para la Gestión de Eventos
export const eventService = {
  // Obtener todos los eventos
  getAll: async () => {
    // Simulamos la petición GET
    const response = await api.get('/posts?_limit=5');
    // Como jsonplaceholder nos da datos de blogs, los adaptamos a "Eventos" para que no falle la interfaz
    return response.data.map((item, index) => ({
      id: item.id,
      titulo: `Conferencia Académica: ${item.title.substring(0, 20)}`,
      tipo: index % 2 === 0 ? "Conferencia" : "Taller",
      fecha: `2026-08-1${index}`,
      ponente: "Expositor Continental"
    }));
  },

  // Registrar un evento nuevo (POST)
  create: async (nuevoEvento) => {
    const response = await api.post('/posts', nuevoEvento);
    return response.data;
  },

  // Eliminar un evento (DELETE)
  delete: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  }
};

export default api;