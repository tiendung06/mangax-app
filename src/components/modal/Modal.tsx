import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  url: string;
  type: boolean;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-text1 bg-opacity-60"
          onClick={props.toggle}
        >
          {props.type ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-4/5 h-1/3 lg:h-2/3 md:w-2/3"
            >
              <iframe
                width="560"
                height="315"
                src={props.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-fill w-full h-full rounded-xl"
              ></iframe>
            </div>
          ) : (
            <div onClick={(e) => e.stopPropagation()}>
              <img
                src={props.url}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
