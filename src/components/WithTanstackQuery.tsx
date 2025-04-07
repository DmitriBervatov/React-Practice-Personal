import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   if (!response.ok) throw new Error("Network response was not ok");
//   return response.json();
// };

const fetchData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const WithTanstackQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error ocurred: {error.message}</h1>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default WithTanstackQuery;
