import { ReactNode, useState } from "react";

const Modal2 = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Show Modal
      </button>

      {show && (
        <section
          className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black/50"
          onClick={() => setShow(false)}
        >
          <div
            className="bg-white mx-[10%] my-auto p-[20px] w-[50%]"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            <button
              className="border p-5 bg-gray-300"
              onClick={() => setShow(false)}
            >
              Hide Modal
            </button>

            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal2;
