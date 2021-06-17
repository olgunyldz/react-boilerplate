import { screen, render, cleanup } from '@testing-library/react';
import Todo from '../Todo';

afterEach(() => {
  cleanup();
});

test('should render Todo Component color is green if completed is false', () => {
  const todo = {
    id: 1,
    description: 'React Öğren',
    completed: false,
  };
  render(<Todo todo={todo} />);
  const element = screen.getByTestId('todo-item-1');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(todo.description);

  expect(element.firstChild).toHaveStyle({ color: 'green' });
});

test('should render Todo Component color is red if completed is true', () => {
  const todo = {
    id: 1,
    description: 'React Öğren',
    completed: true,
  };
  render(<Todo todo={todo} />);
  const element = screen.getByTestId('todo-item-1');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(todo.description);

  expect(element.firstChild).toHaveStyle({ color: 'red' });
});

test('should render Todo Component as native', () => {
  const todo = {
    id: 1,
    description: 'React Öğren',
    completed: false,
  };
  render(<Todo todo={todo} />);
  const element = document.getElementById('todo-id-1');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(todo.description);
});
