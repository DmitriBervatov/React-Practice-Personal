import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
    refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId === 10 ? 1 : prevId + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Todo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() =>
          setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))
        }
      >
        Next Todo
      </button>
    </div>
  );
};

export default RefetchInterval;
