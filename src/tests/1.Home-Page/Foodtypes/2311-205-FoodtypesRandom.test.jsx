import { render, screen } from '@testing-library/react';
import FoodTypes from './FoodTypes';

/********************************************************************/
/******** 2311-205 FOODTYPES  COMPONENT RANDOM RENDER TEST **********/
/********************************************************************/

describe('Pruebas en <FoodTypes />', () => {
  test('debe renderizar correctamente el componente FoodTypes', () => {
    render(<FoodTypes />);

    // Verificamos que el título esté presente
    const title = screen.getByText('Sugeridas para ti');
    expect(title).toBeInTheDocument();

    // Verificamos que se muestren 6 tarjetas de comida
    const foodCards = screen.getAllByTestId('food-card');
    expect(foodCards.length).toBe(6);
  });

  test('debe mostrar FoodTypes distintas al cargar y recargar el sitio', () => {
    render(<FoodTypes />);

    // Obtenemos las FoodTypes iniciales
    const initialFoodTypes = screen.getAllByTestId('food-card').map((card) => card.textContent);

    // Recargamos el sitio
    window.location.reload();

    // Obtenemos las FoodTypes después de recargar
    const refreshedFoodTypes = screen.getAllByTestId('food-card').map((card) => card.textContent);

    // Verificamos que las FoodTypes sean distintas
    expect(initialFoodTypes).not.toEqual(refreshedFoodTypes);
  });
});