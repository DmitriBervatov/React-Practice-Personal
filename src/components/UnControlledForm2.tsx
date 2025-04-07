import { useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subscribe: boolean;
  message: string;
}

const UnControlledForm2 = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subscribeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      subscribe: subscribeRef.current?.checked ?? false,
      message: messageRef.current?.value ?? "",
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={firstNameRef} placeholder="First Name" />
      <input type="text" ref={lastNameRef} placeholder="Last Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <label>
        <input type="checkbox" ref={subscribeRef} />
        Subscribe to Newsletter
      </label>

      <textarea ref={messageRef} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UnControlledForm2;
