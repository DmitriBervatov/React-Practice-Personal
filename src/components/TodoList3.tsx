interface Todo {
  id: number;
  title: string;
  body: string;
}

interface TodoList3Props {
  todo: Todo | null;
}

const TodoList3 = ({ todo }: TodoList3Props) => {
  const { id, title } = todo || {};

  return todo ? (
    <div>
      <p>
        <strong>Todo ID:</strong> {id}
      </p>
      <h1>
        <strong>Todo Title:</strong> {title}
      </h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TodoList3;
