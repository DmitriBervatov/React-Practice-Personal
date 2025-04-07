import { useMyContext } from "@/hooks/useMyContext";

export const SlotContent = () => {
  const { setValue } = useMyContext();

  return (
    <button onClick={() => setValue("New Value From SlotContent")}>
      Update Context Value
    </button>
  );
};

export default SlotContent;
