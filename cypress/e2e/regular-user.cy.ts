/// <reference types="cypress" />

describe('Regular user experience', () => {
  // Проверка работы фильтров
  it('Check sirvices filter', () => {
    cy.visit('/services');

    // фильтрация услуг
    cy.getByData('category-select').select('Автосервис');
    cy.getByData('subcategory-select').select('Жидкости и фильтры');

    // проверка фильтрации, поиск нужного заголовка
    cy.getByData('services-cards-title')
      .should('have.length', 1)
      .contains('Жидкости и фильтры');

    // добавление услуги в корзину
    cy.getByData('cards-container')
      .should('have.length', 1)
      .children(1)
      .contains('В корзину')
      .click();
  });

  // Проверка поиска услуг
  it('Check search services', () => {
    // ввод в инпут
    cy.getByData('sevices-search-input').click();
    cy.getByData('search-input')
      .type('замена масла')
      .should('have.value', 'замена масла');

    // проверка на то, что есть только 1 услуга в контейнере
    cy.get('[data-cy="search-content"] > [data-cy="cards-container"]').should(
      'have.length',
      1
    );

    // поиск услуги в dom и добавление в корзину
    cy.get(
      '[data-cy="search-content"] > [data-cy="cards-container"] > .card__CardContainer-sc-envfbl-0'
    )
      .find('button')
      .click();
  });

  // Проверка работы корзины
  it('Check cart', () => {
    cy.getByData('cart-popup-btn').click();

    // проверка на то, что в корзине 2 услуги и удаление 1
    cy.getByData('cart-container')
      .children(1)
      .should('have.length', 2)
      .first()
      .find('[data-cy="card-order-del"]')
      .click();
    cy.getByData('cart-container').children(1).should('have.length', 1);

    cy.contains('Продолжить запись').click();
  });

  // Проверка записи на ремонт
  it('Check order form', () => {
    cy.get('[data-cy="car-brand-select"]').select('Kia');
    cy.get('[data-cy="car-brand-model"]').select('Elan');

    // должен выдать ошибку, если не ввели имя
    cy.get('input[placeholder="Имя"]').focus().blur();
    cy.contains('Обязательное поле');
    cy.getByData('step-one-order-btn').should('be.disabled');

    cy.get('input[placeholder="Имя"]')
      .type('Иван')
      .should('have.value', 'Иван');

    // должен выдать ошибку, если не указали телефон
    cy.get('input[placeholder="Номер телефона"]').focus().blur();
    cy.contains('Обязательное поле');
    cy.get('input[placeholder="Номер телефона"]').type('9991111111');

    cy.getByData('step-one-order-btn').should('be.enabled').click();
  });
});
