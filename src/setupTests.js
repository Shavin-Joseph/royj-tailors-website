import '@testing-library/jest-dom';

window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();
window.matchMedia = query => ({
  matches: false, media: query, onchange: null,
  addEventListener: jest.fn(), removeEventListener: jest.fn(),
  addListener: jest.fn(), removeListener: jest.fn(), dispatchEvent: jest.fn(),
});
HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
