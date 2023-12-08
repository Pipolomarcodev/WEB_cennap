import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from './Context/UserContext'; //Verificar que el contexto este en la miama ruta porque esta sin hacer
import { Login } from './Login';

/********************************************************************/
/*********** 2311-206 LOGIN SESSION AND COMPONENT TEST **************/
/********************************************************************/

describe('Pruebas en <Login />', () => {
  const mockLogin = jest.fn();
  const mockSetError = jest.fn();
  const mockSetSubmitting = jest.fn();

  beforeEach(() => {
    render(
      <UserContext.Provider value={{ login: mockLogin }}>
        <Login />
      </UserContext.Provider>
    );
  });

  test('debería renderizar el formulario de inicio de sesión', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByText('Iniciar Sesion')).toBeInTheDocument();
  });

  test('debería mostrar el mensaje de error si hay un error en el inicio de sesión', async () => {
    const errorMessage = 'Usuario no registrado';
    mockLogin.mockRejectedValueOnce({ response: { data: { message: errorMessage } } });

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText('Iniciar Sesion'));

    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  test('debería llamar a la función de inicio de sesión con los valores ingresados', async () => {
    const username = 'testuser';
    const password = 'testpassword';

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: username } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: password } });
    fireEvent.click(screen.getByText('Iniciar Sesion'));

    expect(mockLogin).toHaveBeenCalledWith({ username, password });
  });

  test('debería llamar a setSubmitting(false) después de intentar iniciar sesión', async () => {
    fireEvent.click(screen.getByText('Iniciar Sesion'));

    expect(mockSetSubmitting).toHaveBeenCalledWith(false);
  });
});