import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import Register from './Register';

/********************************************************************/
/***************** 2311-207 CREATE USER ACCOUNT TEST  ***************/
/********************************************************************/

describe('Componente Register', () => {
  test('debería renderizar el formulario de registro', () => {
    render(
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Register />
      </Formik>
    );

    const nameInput = screen.getByLabelText('Nombre');
    const lastnameInput = screen.getByLabelText('Apellido');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Contraseña');
    const confirmPasswordInput = screen.getByLabelText('Confirmar Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    expect(nameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('debería mostrar mensajes de error al enviar el formulario vacío', async () => {
    render(
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Register />
      </Formik>
    );

    const submitButton = screen.getByRole('button', { name: 'Registrarse' });
    userEvent.click(submitButton);

    const nameError = await screen.findByText('Requerido!');
    const lastnameError = await screen.findByText('Requerido!');
    const emailError = await screen.findByText('Ingrese su email');
    const passwordError = await screen.findByText('Campo obligatorio');
    const confirmPasswordError = await screen.findByText('Comfirme el password');

    expect(nameError).toBeInTheDocument();
    expect(lastnameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(confirmPasswordError).toBeInTheDocument();
  });

  test('debería mostrar mensaje de error al ingresar un email inválido', async () => {
    render(
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Register />
      </Formik>
    );

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    userEvent.type(emailInput, 'invalidemail');
    userEvent.click(submitButton);

    const emailError = await screen.findByText('formato de email incorrecto');

    expect(emailError).toBeInTheDocument();
  });

  test('debería mostrar mensaje de error al ingresar una contraseña con menos de 8 caracteres', async () => {
    render(
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Register />
      </Formik>
    );

    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    userEvent.type(passwordInput, '1234567');
    userEvent.click(submitButton);

    const passwordError = await screen.findByText('La contraseña debe tener al menos 8 caracteres');

    expect(passwordError).toBeInTheDocument();
  });

  test('debería mostrar mensaje de error al ingresar una contraseña y confirmación de contraseña diferentes', async () => {
    render(
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        <Register />
      </Formik>
    );

    const passwordInput = screen.getByLabelText('Contraseña');
    const confirmPasswordInput = screen.getByLabelText('Confirmar Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    userEvent.type(passwordInput, 'password123');
    userEvent.type(confirmPasswordInput, 'differentpassword');
    userEvent.click(submitButton);

    const confirmPasswordError = await screen.findByText('Error validacion');

    expect(confirmPasswordError).toBeInTheDocument();
  });
});