import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

/********************************************************************/
/************** 2311-203 CARD COMPONENT RENDER TEST *****************/
/********************************************************************/

describe('Pruebas en <Card />', () => {
  const mockRating = 4.5;
  const mockName = 'Restaurante Ejemplo';
  const mockCategory = 'Comida';
  const mockLocation = 'Ciudad Ejemplo';
  const mockImageUrl = 'src/assets/images-cards/img/img-rest.png';
  const mockReviews = 10;
  const mockLiked = false;
  const mockHandleAddToCart = jest.fn();
  const mockOpenModal = jest.fn();

  test('debe renderizar correctamente el componente Card', () => {
    render(
      <Card
        rating={mockRating}
        name={mockName}
        category={mockCategory}
        location={mockLocation}
        image_url={mockImageUrl}
        reviews={mockReviews}
        liked={mockLiked}
        handleAddToCart={mockHandleAddToCart}
        openModal={mockOpenModal}
      />
    );

    // Verificamos que el nombre del restaurante se renderice correctamente
    const nameElement = screen.getByText(mockName);
    expect(nameElement).toBeInTheDocument();

    // Verificamos que la categoría se renderice correctamente
    const categoryElement = screen.getByText(mockCategory);
    expect(categoryElement).toBeInTheDocument();

    // Verificamos que la ubicación se renderice correctamente
    const locationElement = screen.getByText(mockLocation);
    expect(locationElement).toBeInTheDocument();

    // Verificamos que la imagen se renderice correctamente
    const imageElement = screen.getByAltText(`Rating: ${mockRating} stars`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockImageUrl);

    // Verificamos que el botón de "Me gusta" se renderice correctamente
    const likeButtonElement = screen.getByAltText('');
    expect(likeButtonElement).toBeInTheDocument();
    expect(likeButtonElement).toHaveClass('like-button');

    // Verificamos que el evento onClick del botón de "Me gusta" funcione correctamente
    fireEvent.click(likeButtonElement);
    expect(mockHandleAddToCart).toHaveBeenCalled();

    // Verificamos que el evento onClick de la imagen funcione correctamente
    fireEvent.click(imageElement);
    expect(mockOpenModal).toHaveBeenCalled();
  });
});