interface WithLoadingProps {
  isLoading: boolean;
  [key: string]: any;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoading({ isLoading, ...props }: WithLoadingProps) {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};
