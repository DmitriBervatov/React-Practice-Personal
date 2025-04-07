import { WrappedComponentProps } from "@/types/access-control.types";

const MyComponent2 = ({
  message,
  userName,
  userPermission,
}: WrappedComponentProps) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Welcome, {userName}</p>
      <p>You permission: {userPermission?.join(", ")}</p>
    </div>
  );
};

export default MyComponent2;
