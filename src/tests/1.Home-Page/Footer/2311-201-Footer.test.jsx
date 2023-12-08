import {expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import Footer from './Footer.js';
import styles from './Footer.module.css';

/********************************************************************/
/***************** 2311-201 FOOTER  COMPONENT  TEST *****************/
/********************************************************************/

describe('Pruebas en <Footer />', () => {
    let utils;
  
    beforeEach(() => {
      utils = render(<Footer />);
    });
  
    test('debe encontrar el componente Footer', () => {
      expect(utils.container).toBeInTheDocument();
    });
  
    test('debe encontrar el texto de derechos de autor', () => {
      expect(utils.container).toHaveTextContent('Powered by © cenapp 2023. All rights reserved.');
    });

    test('debe tener una clase específica del módulo CSS', () => {
      expect(utils.getByTestId('styles.footer').classList.contains(styles.someClass)).toBe(true);
    });
  });