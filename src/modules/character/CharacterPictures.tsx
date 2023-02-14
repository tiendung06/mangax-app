import useModal from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { Images2 } from "../../interface/charactersInterface";

const CharacterPictures = () => {
  const [pictures, setPictures] = useState<Images2[]>([]);
  const { isOpen, toggle } = useModal();
  const [url, setUrl] = useState<string>("");
  const [typeModal, setTypeModal] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(jikanAPI.getCharacterPictures(Number(id))).then(({ data }) => {
      setPictures(data.data);
    });
  }, [id]);

  const openModal = (value: string, type: boolean) => {
    setUrl(value);
    toggle();
    setTypeModal(type);
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Pictures</h2>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8">
        {pictures?.map(({ jpg }, index: number) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openModal(jpg.image_url, false)}
            >
              <img
                src={jpg.image_url}
                alt=""
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} toggle={toggle} type={typeModal} url={url} />
    </div>
  );
};

export default CharacterPictures;
