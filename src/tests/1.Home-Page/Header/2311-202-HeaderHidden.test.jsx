import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../home/components/Header/Header';

/********************************************************************/
/********************** HEADER HIDDEN TEST **************************/
/********************************************************************/

describe('Pruebas en <Header />', () => {
  test('debe aplicar la clase "scrolled" al hacer scroll en la web', () => {
    render(<Header />);

    // Verificamos que inicialmente no se aplique la clase "scrolled"
    const navElement = screen.getByTestId('nav');
    expect(navElement).not.toHaveClass('scrolled');

    // Simulamos el evento de scroll en la ventana
    fireEvent.scroll(window);

    // Verificamos que se aplique la clase "scrolled" después de hacer scroll
    expect(navElement).toHaveClass('scrolled');
  });

  test('debe ocultar el nav estando registrado o no', () => {
    render(<Header isAuth={false} />);

    // Verificamos que el nav esté visible inicialmente
    const navElement = screen.getByTestId('nav');
    expect(navElement).toBeVisible();

    // Cambiamos el estado de autenticación a "true"
    render(<Header isAuth={true} />);

    // Verificamos que el nav siga estando visible después de estar registrado
    expect(navElement).toBeVisible();
  });
});