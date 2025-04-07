import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}

const WithoutCustomHook = () => {
  const [data, setData] = useState<Todo[] | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: Todo[]) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default WithoutCustomHook;
