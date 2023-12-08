import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { Header } from './Header';

/********************************************************************/
/************** 2311-200 HEADER COMPONENT RENDER TEST ***************/
/********************************************************************/

describe('Componente Header', () => {
  test('debería renderizar el logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('debería renderizar los botones de Crear Cuenta e Iniciar sesión cuando el usuario no está autenticado', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ isAuth: false }}>
          <Header />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const crearCuentaButton = screen.getByText('Crear Cuenta');
    const iniciarSesionButton = screen.getByText('Iniciar sesión');
    expect(crearCuentaButton).toBeInTheDocument();
    expect(iniciarSesionButton).toBeInTheDocument();
  });

  test('debería renderizar el componente HeaderLogin cuando el usuario está autenticado', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ isAuth: true }}>
          <Header />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const headerLoginElement = screen.getByTestId('header-login');
    expect(headerLoginElement).toBeInTheDocument();
  });
});



















