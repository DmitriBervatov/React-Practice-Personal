import { useQuery } from "@tanstack/react-query";

const getRandomNumber = () => {
  return Promise.resolve(Math.random());
};

const Deduplication = () => {
  const { data } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumber,
  });

  return <div>Random Number Is: {data}</div>;
};

export default Deduplication;
