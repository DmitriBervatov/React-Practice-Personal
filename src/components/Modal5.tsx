import { ReactNode } from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const Modal5 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[20rem">{children}</div>
    </div>
  );
};

Modal5.Title = ModalTitle;
Modal5.Body = ModalBody;
Modal5.Footer = ModalFooter;

export default Modal5;
