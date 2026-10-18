import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import OrderForm from './components/OrderForm';
import Modal from './components/Modal';
import { products } from './data/products';
jest.mock('./components/Reveal', () => ({ __esModule: true, default: ({ children }) => children }));

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, '', '/');
});
test('shows a missing product instead of silently displaying the first product', () => {
  window.history.replaceState({}, '', '/product/missing-product');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'This piece isn’t here.' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /choose your size & enquire/i })).not.toBeInTheDocument();
});
test('unknown routes have a useful recovery link', () => {
  window.history.replaceState({}, '', '/missing-page');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Let’s find your way back.' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore the collection/i })).toHaveAttribute('href', '/shop');
});
test('collection supports linked categories, sorting, empty search and recovery', () => {
  window.history.replaceState({}, '', '/shop?category=shirts&sort=price-low');
  render(<App />);
  let cards = screen.getAllByRole('article');
  expect(document.title).toBe('The collection | Royj Tailors');
  expect(cards).toHaveLength(2);
  expect(within(cards[0]).getByRole('heading')).toHaveTextContent('The casual Oxford shirt');
  userEvent.type(screen.getByRole('searchbox'), ' no matching piece ');
  expect(screen.getByRole('heading', { name: 'No pieces found this time.' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /clear filters/i }));
  expect(screen.getAllByRole('article')).toHaveLength(products.length);
});
test('saved pieces survive a remount and can be removed from the saved view', () => {
  window.history.replaceState({}, '', '/shop');
  const first = render(<App />);
  userEvent.click(screen.getByRole('button', { name: 'Save Dark Green Utility Cargo Trousers' }));
  expect(JSON.parse(localStorage.getItem('royj-saved-pieces'))).toEqual([products[0].id]);
  first.unmount();
  window.history.replaceState({}, '', '/shop?saved=true');
  render(<App />);
  expect(screen.getAllByRole('article')).toHaveLength(1);
  userEvent.click(screen.getByRole('button', { name: 'Unsave Dark Green Utility Cargo Trousers' }));
  expect(screen.getByRole('heading', { name: 'Keep a little inspiration.' })).toBeInTheDocument();
});
test.each(['price-low', 'price-high'])('school collection sorts uniform pieces by price for %s', sort => {
  window.history.replaceState({}, '', '/shop?category=uniforms&sort=' + sort);
  render(<App />);
  const cards = screen.getAllByRole('article');
  expect(cards).toHaveLength(2);
  if (sort === 'price-low') {
    expect(within(cards[0]).getByRole('heading')).toHaveTextContent('The white school trouser');
    expect(within(cards[1]).getByRole('heading')).toHaveTextContent('The school-day uniform');
  } else {
    expect(within(cards[0]).getByRole('heading')).toHaveTextContent('The school-day uniform');
    expect(within(cards[1]).getByRole('heading')).toHaveTextContent('The white school trouser');
  }
  expect(within(cards[0]).getByText(/material cost/i)).toBeInTheDocument();
  expect(within(cards[1]).getByText(/material cost/i)).toBeInTheDocument();
});
test('white school trousers can be selected in the customizer and included in an enquiry', () => {
  render(<App />);
  userEvent.selectOptions(screen.getByLabelText(/start with your piece/i), 'white-school-uniform-trousers');
  userEvent.click(screen.getByRole('button', { name: /add your measurements/i }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByLabelText('Color')).toHaveValue('White');
  userEvent.click(within(dialog).getByRole('button', { name: /review your enquiry/i }));
  const message = new URL(within(dialog).getByRole('link', { name: /open whatsapp/i }).getAttribute('href')).searchParams.get('text');
  expect(message).toContain("Piece: Boys' White Full-Length School Trousers");
  expect(message).toContain('Starting price: LKR 1,300 + material cost');
  expect(message).toContain('Color: White');
});
test('invalid saved data cannot crash the collection', () => {
  localStorage.setItem('royj-saved-pieces', '{"bad":"data"}');
  window.history.replaceState({}, '', '/shop?saved=true');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Your saved pieces.' })).toBeInTheDocument();
});
test('custom measurements persist after switching sizing methods and are included in the review', () => {
  render(<OrderForm product={products[0]} initialColor="Khaki Tan" initialFit="Relaxed" />);
  userEvent.click(screen.getByRole('radio', { name: 'My measurements' }));
  const inputs = screen.getAllByRole('spinbutton');
  inputs.forEach((input,index) => userEvent.type(input, String([32,31,40,22,14][index])));
  userEvent.click(screen.getByRole('radio', { name: 'Standard size' }));
  userEvent.click(screen.getByRole('radio', { name: 'My measurements' }));
  expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(32);
  userEvent.click(screen.getByRole('button', { name: 'Review your enquiry' }));
  const href = screen.getByRole('link', { name: /open whatsapp/i }).getAttribute('href');
  const message = new URL(href).searchParams.get('text');
  expect(message).toContain('Color: Khaki Tan');
  expect(message).toContain('Preferred fit: Relaxed');
  expect(message).toContain('Waist: 32 inches');
  expect(message).toContain('Inseam (Leg Length): 31 inches');
});
test('negative measurements are invalid', () => {
  render(<OrderForm product={products[0]} />);
  userEvent.click(screen.getByRole('radio', { name: 'My measurements' }));
  fireEvent.change(screen.getAllByRole('spinbutton')[0], { target: { value: '-10' } });
  expect(screen.getAllByRole('spinbutton')[0].checkValidity()).toBe(false);
});
test('modal locks scrolling, closes on Escape cancel, and restores trigger focus', () => {
  const trigger = document.createElement('button');
  document.body.appendChild(trigger);
  trigger.focus();
  const close = jest.fn();
  const { rerender } = render(<Modal isOpen onClose={close} title="Test dialog"><p>Test content</p></Modal>);
  expect(document.body.style.overflow).toBe('hidden');
  fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true, cancelable: true }));
  expect(close).toHaveBeenCalledTimes(1);
  rerender(<Modal isOpen={false} onClose={close} title="Test dialog" />);
  expect(document.body.style.overflow).toBe('');
  expect(document.activeElement).toBe(trigger);
  trigger.remove();
});
