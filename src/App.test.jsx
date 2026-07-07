import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import App from './App';

describe('Pruebas de la Plataforma de Eventos', () => {
  test('Debería renderizar el nombre de la aplicación en la barra de navegación', () => {
    render(<App />);
    
    // Buscamos si el texto del logo "Eventos UC" existe en la pantalla
    const elementoTitulo = screen.getByText(/Eventos UC/i);
    
    // Verificamos que efectivamente esté en el documento de la página
    expect(elementoTitulo).toBeInTheDocument();
  });
});