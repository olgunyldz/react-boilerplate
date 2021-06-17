import Todo from './components/Todo';

function App() {
  const todos = [
    {
      id: 1,
      description: 'React',
      completed: true,
    },
    {
      id: 2,
      description: 'React - Unit Testing',
      completed: false,
    },
    {
      id: 3,
      description: 'REact - Multi Language Support',
      completed: false,
    },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
