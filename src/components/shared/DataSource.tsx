import React, { useEffect, useState } from "react";

interface DataSourceProps {
  getDataFunc?: () => void;
  resourceName: string;
  children: React.ReactNode;
}

const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}: DataSourceProps) => {
  const [state, setState] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFunc();
        setState(data);
      } catch (error) {
        setError("Faoiled to fetch data");
      }
    })();
  }, [getDataFunc]);

  return (
    <>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              [resourceName]: state,
            });
          }
          return child;
        })
      )}
    </>
  );
};

export default DataSource;
