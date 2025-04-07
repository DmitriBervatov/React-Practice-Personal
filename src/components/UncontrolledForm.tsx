import { FormEvent, useRef } from "react";

const UncontrolledForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameInput.current && ageInput.current && hairColorInput.current) {
      console.log(nameInput.current.value);
      console.log(ageInput.current.value);
      console.log(hairColorInput.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameInput}
        type="text"
        className="border"
        name="name"
        placeholder="Name"
      />
      <input
        ref={ageInput}
        type="number"
        className="border"
        name="age"
        placeholder="Age"
      />
      <input
        ref={hairColorInput}
        type="text"
        className="border"
        name="hairColor"
        placeholder="Hair Color"
      />
      <input type="submit" name="submit" placeholder="Submit" />
    </form>
  );
};

export default UncontrolledForm;
