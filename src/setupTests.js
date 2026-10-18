<<<<<<< HEAD
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
=======
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
