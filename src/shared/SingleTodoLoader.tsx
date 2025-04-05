import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: string;
}

interface SingleTodoLoaderprops {
  children: ReactNode;
  todoId: number;
}

interface ChildComponentProps {
  todos: Todo | null;
}

const SingleTodoLoader = ({ todoId, children }: SingleTodoLoaderprops) => {
  const [todos, setTodos] = useState<Todo | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );

      setTodos(response.data);
    })();
  }, [todoId]);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, { todos });
        }
        return child;
      })}
    </div>
  );
};

export default SingleTodoLoader;
