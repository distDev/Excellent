import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from './index';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from '../../../Theme/light';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { store } from '../../../Store';


describe('Login testing', () => {
  let setupItem = () =>
    render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={light}>
            <Login />
          </ThemeProvider>
        </Router>
      </Provider>
    );

  it('Should be rendered', () => {
    setupItem();
    const LoginTitle = screen.getByText(/Войдите в Ex/i);
    expect(LoginTitle).toBeInTheDocument();
  });

  it('Should be able to type an phone', async () => {
    setupItem();
    const user = userEvent.setup();
    const phoneInput = screen.getByRole('textbox');
    await user.type(phoneInput, '9991111111');
    expect(phoneInput).toHaveValue('+7 (999) 111-1111');
  });

  it('Button should be disable', async () => {
    setupItem();
    const user = userEvent.setup();
    const phoneInput = screen.getByRole('textbox');
    await user.type(phoneInput, '999');
    const button = screen.getByRole('button', { name: /войти/i });
    expect(button).toBeDisabled();
  });

  it('Button should not be disable', async () => {
    setupItem();
    const user = userEvent.setup();
    const phoneInput = screen.getByRole('textbox');
    await user.type(phoneInput, '9991111111');
    const button = screen.getByRole('button', { name: /войти/i });
    expect(button).not.toBeDisabled();
  });

});
