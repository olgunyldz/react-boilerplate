import { screen, render, cleanup } from '@testing-library/react';
import Todo from '../Todo';

test('should render Todo Component', () => {
  const text = 'Hello Test World!!!';
  render(<Todo text={text} />);
  const element = screen.getByTestId('todo-item');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});

test('should render Todo Component as native', () => {
  const text = 'Hello Test World!!!';
  render(<Todo text={text} />);
  const element = document.getElementById('todo-id');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
