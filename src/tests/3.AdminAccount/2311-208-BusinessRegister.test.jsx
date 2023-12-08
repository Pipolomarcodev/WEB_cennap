import { render, screen, fireEvent } from '@testing-library/react';
import BusinessRegister from '../admin/components/AdminRegister/Business-register';

/********************************************************************/
/*********** 2311-208 PRODUCT REGISTER FORM TEST ********************/
/********************************************************************/

describe('Pruebas en <BusinessRegister />', () => {
  test('debe renderizar correctamente el componente BusinessRegister', () => {
    render(<BusinessRegister />);

    // Verificamos que el formulario de registro esté presente
    const registerForm = screen.getByTestId('register-form');
    expect(registerForm).toBeInTheDocument();

    // Verificamos que los campos del formulario estén presentes
    const emailInput = screen.getByLabelText('Correo Electrónico');
    expect(emailInput).toBeInTheDocument();

    const nameInput = screen.getByLabelText('Nombre Titular');
    expect(nameInput).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText('Apellido Titular');
    expect(lastNameInput).toBeInTheDocument();

    const provinceInput = screen.getByLabelText('Provincia');
    expect(provinceInput).toBeInTheDocument();

    const countrySelect = screen.getByLabelText('País');
    expect(countrySelect).toBeInTheDocument();

    const logoInput = screen.getByLabelText('Logo');
    expect(logoInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText('Contraseña');
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = screen.getByLabelText('Confirmar Contraseña');
    expect(confirmPasswordInput).toBeInTheDocument();

    // Verificamos que el botón de registro esté presente
    const registerButton = screen.getByRole('button', { name: 'Registrarse' });
    expect(registerButton).toBeInTheDocument();

    // Verificamos que el botón de volver esté presente
    const backButton = screen.getByRole('button', { name: 'Volver' });
    expect(backButton).toBeInTheDocument();
  });

  test('debe mostrar error al enviar formulario vacío', () => {
    render(<BusinessRegister />);

    // Simulamos el envío del formulario vacío
    const registerButton = screen.getByRole('button', { name: 'Registrarse' });
    fireEvent.click(registerButton);

    // Verificamos que se muestren los mensajes de error para cada campo
    const emailError = screen.getByText('Este campo es obligatorio');
    expect(emailError).toBeInTheDocument();

    const nameError = screen.getByText('Este campo es obligatorio');
    expect(nameError).toBeInTheDocument();

    const lastNameError = screen.getByText('Este campo es obligatorio');
    expect(lastNameError).toBeInTheDocument();

    const provinceError = screen.getByText('Este campo es obligatorio');
    expect(provinceError).toBeInTheDocument();

    const countryError = screen.getByText('Este campo es obligatorio');
    expect(countryError).toBeInTheDocument();

    const logoError = screen.getByText('Este campo es obligatorio');
    expect(logoError).toBeInTheDocument();

    const passwordError = screen.getByText('Este campo es obligatorio');
    expect(passwordError).toBeInTheDocument();

    const confirmPasswordError = screen.getByText('Este campo es obligatorio');
    expect(confirmPasswordError).toBeInTheDocument();
  });
});