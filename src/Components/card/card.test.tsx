import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '../../Store';
import { light } from '../../Theme/light';
import userEvent from '@testing-library/user-event';
import Card from './index';

const testItem = {
  id: '4214tewg4wt',
  img: '',
  name: 'тестовая услуга',
  price: 898,
};

describe('Service card testing', () => {
  let setupItem = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={light}>
            <Card
              id={testItem.id}
              img={testItem.img}
              name={testItem.name}
              price={testItem.price}
            />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

  it('Should be rendered', () => {
    setupItem();

    const name = screen.getByRole('heading', { name: /тестовая услуга/i });
    expect(name).toBeInTheDocument();
  });

  it('Should be added to cart', async () => {
    const user = userEvent;
    setupItem();

    const button = screen.getByRole('button', { name: /в корзину/i });
    await user.click(button);
    const inTheCart = await screen.findByRole('button', { name: /добавлено/i });
    expect(inTheCart).toBeInTheDocument();
  });

  it('Should be removed from cart', async () => {
    const user = userEvent;
    setupItem();

    const button = screen.getByRole('button', { name: /добавлено/i });
    await user.click(button);
    const newButton = await screen.findByRole('button', { name: /в корзину/i });
    expect(newButton).toBeInTheDocument();
  });
});
