interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todo: Todo | null;
}

const TodoList = ({ todo }: TodoListProps) => {
  const { id, title } = todo || {};

  return todo ? (
    <div>
      <p>
        <strong>Todo Id</strong>
        {id}
      </p>
      <h1>
        <strong>Todo Title: </strong>
        {title}
      </h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TodoList;
