import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from '../../Store';
import { light } from '../../Theme/light';
import AccountMenu from './index';
import { async } from '@firebase/util';

let setShowAccMenu = jest.fn();

describe('Account menu testing', () => {
  let setupItem = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={light}>
            <AccountMenu setShowAccMenu={setShowAccMenu} />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

  it('Should be rendered', async () => {
    setupItem();
    const serviceList = screen.getByText(/записи/i);

    expect(serviceList).toBeInTheDocument();
  });
});
