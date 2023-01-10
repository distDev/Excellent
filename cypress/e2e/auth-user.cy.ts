/// <reference types="cypress" />

describe('Auth user behaviour', () => {
  // авторизация
  it('can auth', () => {
    cy.visit('/');
    cy.get('#login-icon').click();

    cy.get('[data-cy="request-otp-btn"]').should('be.disabled');
    cy.get('[ data-cy="phone-input"]')
      .type('9991111111')
      .should('have.value', '+7 (999) 111-1111');
    cy.get('[data-cy="request-otp-btn"]').should('be.enabled').click();

    cy.get('[data-cy="verify-otp-btn"]', { timeout: 16000 }).should(
      'be.disabled'
    );
    cy.get('input[placeholder="Секретный код"]')
      .type('111111')
      .should('have.value', '1 1 1 1 1 1');
    cy.get('[data-cy="verify-otp-btn"]').should('be.enabled').click();
  });

  // изменение личных данных в профиле
  it('can change username', () => {
    // изменить имя пользователя
    cy.get('[data-cy="username-tab"]').click();

    cy.get('[data-cy="username-input"]')
      .clear()
      .type('Иван')
      .should('have.value', 'Иван');
    cy.get('[data-cy="change-username-btn"]').click();

    // вернуть прежнее имя
    cy.get('[data-cy="username-tab"]').click();

    cy.get('[data-cy="username-input"]')
      .clear()
      .type('Олег')
      .should('have.value', 'Олег');
    cy.get('[data-cy="change-username-btn"]').click();
  });

  // проверка записей
  it('check servicelist', () => {});

  // добавление автомобиля
  it('can add car', () => {
    cy.visit('/profile/garage');

    cy.get('[data-cy="add-car-btn"]').click();
    cy.get('[data-cy="car-brand-select"]').select('Kia');
    cy.get('[data-cy="car-brand-model"]').select('Elan');
    cy.get('input[placeholder="Год выпуска"').type('2001');
    cy.get('input[placeholder="VIN"').type('443255h25a253255f');

    cy.get('[data-cy="add-car-submit"]').click();
  });
});
