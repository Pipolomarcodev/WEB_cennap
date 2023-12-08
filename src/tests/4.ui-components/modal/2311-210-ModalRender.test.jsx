import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

/********************************************************************/
/*********** 2311-210 PRODUCT REGISTER FORM TEST ********************/
/********************************************************************/

describe('Pruebas en <Modal />', () => {
  test('debe renderizar correctamente todos los componentes', () => {
    render(<Modal closeModal={() => {}} restaurant={{}} />);

    // Verificamos que el componente ModalGalery se renderice correctamente
    const modalGaleryElement = screen.getByTestId('modal-galery');
    expect(modalGaleryElement).toBeInTheDocument();

    // Verificamos que el componente ModalInfo se renderice correctamente
    const modalInfoElement = screen.getByTestId('modal-info');
    expect(modalInfoElement).toBeInTheDocument();

    // Verificamos que el componente ModalComment se renderice correctamente
    const modalCommentElement = screen.getByTestId('modal-comment');
    expect(modalCommentElement).toBeInTheDocument();

    // Verificamos que el componente ModalText se renderice correctamente
    const modalTextElement = screen.getByTestId('modal-text');
    expect(modalTextElement).toBeInTheDocument();

    // Verificamos que el componente ModalCalendar se renderice correctamente
    const modalCalendarElement = screen.getByTestId('modal-calendar');
    expect(modalCalendarElement).toBeInTheDocument();

    // Verificamos que el botón de reservación se renderice correctamente
    const reserveButtonElement = screen.getByText('Has tu reservacion!');
    expect(reserveButtonElement).toBeInTheDocument();
  });
});