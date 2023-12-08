import { render, screen, fireEvent } from '@testing-library/react';
import BusinessRegister from './Business-register';

/********************************************************************/
/********** 2311-209 PRODUCT REGISTER FORM  COMPONENT  TEST *********/
/********************************************************************/

describe('Componente BusinessRegister', () => {
    
    test('debería renderizar el componente BusinessRegister', () => {
        render(<BusinessRegister />);
        const businessRegisterElement = screen.getByTestId('business-register');
        expect(businessRegisterElement).toBeInTheDocument();
    });

    test('debería mostrar la Sección A del form cuando se llama a showSectionA', () => {
        render(<BusinessRegister />);
        const showSectionAButton = screen.getByTestId('show-section-a-button');
        fireEvent.click(showSectionAButton);
        const sectionAElement = screen.getByTestId('section-a');
        expect(sectionAElement).toBeInTheDocument();
    });

    test('debería mostrar la Sección B del form cuando se llama a showSectionB', () => {
        render(<BusinessRegister />);
        const showSectionBButton = screen.getByTestId('show-section-b-button');
        fireEvent.click(showSectionBButton);
        const sectionBElement = screen.getByTestId('section-b');
        expect(sectionBElement).toBeInTheDocument();
    });

    test('debería volver a la Sección A del form cuando se llama a goBack', () => {
        render(<BusinessRegister />);
        const showSectionBButton = screen.getByTestId('show-section-b-button');
        fireEvent.click(showSectionBButton);
        const goBackButton = screen.getByTestId('go-back-button');
        fireEvent.click(goBackButton);
        const sectionAElement = screen.getByTestId('section-a');
        expect(sectionAElement).toBeInTheDocument();
    });

    test('debería abrir el modal cuando se llama a openModal', () => {
        render(<BusinessRegister />);
        const openModalButton = screen.getByTestId('open-modal-button');
        fireEvent.click(openModalButton);
        const modalElement = screen.getByTestId('modal');
        expect(modalElement).toBeInTheDocument();
    });

    test('debería cerrar el modal cuando se llama a closeModal', () => {
        render(<BusinessRegister />);
        const openModalButton = screen.getByTestId('open-modal-button');
        fireEvent.click(openModalButton);
        const closeModalButton = screen.getByTestId('close-modal-button');
        fireEvent.click(closeModalButton);
        const modalElement = screen.queryByTestId('modal');
        expect(modalElement).not.toBeInTheDocument();
    });

});