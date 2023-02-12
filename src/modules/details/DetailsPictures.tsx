import useModal from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { jikanAPI } from "../../constants/api";
import { Images } from "../../interface/detailsInterface";

const DetailsPictures = ({ id }: { id: string | undefined }) => {
  const [pictures, setPictures] = useState<any>([]);
  const { isOpen, toggle } = useModal();
  const [url, setUrl] = useState<string>("");
  const [typeModal, setTypeModal] = useState<boolean>(false);

  useEffect(() => {
    axios.get(jikanAPI.getAnimePictures(Number(id))).then(({ data }) => {
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
      <div className="grid w-full grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {pictures?.map(({ webp }: Images, index: number) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openModal(webp.large_image_url, false)}
            >
              <img
                src={webp.image_url}
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

export default DetailsPictures;
