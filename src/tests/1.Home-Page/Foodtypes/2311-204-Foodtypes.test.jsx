import { render, screen } from '@testing-library/react';
import FoodTypes from './FoodTypes';

/********************************************************************/
/**************** 2311-204 FOODTYPES COMPONENT  TEST ****************/
/********************************************************************/

describe('Componente FoodTypes', () => {
  test('debería renderizar el componente FoodTypes', () => {
    render(<FoodTypes />);
    const foodTypesElement = screen.getByTestId('food-types');
    expect(foodTypesElement).toBeInTheDocument();
  });

  test('debería mostrar el título "Sugeridas para ti"', () => {
    render(<FoodTypes />);
    const titleElement = screen.getByText('Sugeridas para ti');
    expect(titleElement).toBeInTheDocument();
  });

  test('debería renderizar 6 componentes SmallCard', () => {
    render(<FoodTypes />);
    const smallCardElements = screen.getAllByTestId('small-card');
    expect(smallCardElements.length).toBe(6);
  });
});

test('debería renderizar 6 componentes SmallCard con los títulos correctos', () => {
  render(<FoodTypes />);
  const smallCardElements = screen.getAllByTestId('small-card');
  expect(smallCardElements.length).toBe(6);
  smallCardElements.forEach((card, index) => {
    const cardTitle = screen.getByText(`Nombre de la carta ${index + 1}`);
    expect(card).toContainElement(cardTitle);
  });
});