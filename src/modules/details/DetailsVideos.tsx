import useModal from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { Promo } from "../../interface/detailsInterface";
import { jikanAPI } from "../../constants/api";

const DetailsVideos = ({ id }: { id: string | undefined }) => {
  const [videos, setVideos] = useState<any>([]);
  const { isOpen, toggle } = useModal();
  const [url, setUrl] = useState<string>("");
  const [typeModal, setTypeModal] = useState<boolean>(false);

  useEffect(() => {
    axios.get(jikanAPI.getAnimeVideos(Number(id))).then(({ data }) => {
      setVideos(data.data.promo);
    });
  }, [id]);

  const openModal = (value: string, type: boolean) => {
    setUrl(value);
    toggle();
    setTypeModal(type);
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold md:text-lg">Trailers</h2>
      <div className="grid w-full grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {videos?.map(({ title, trailer }: Promo) => {
          return (
            <div
              key={title}
              className="trailer min-w-[100px] relative cursor-pointer rounded-xl overflow-hidden"
              onClick={() => openModal(trailer.embed_url, true)}
            >
              <img
                src={trailer.images.medium_image_url}
                alt={title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center invisible px-3 text-sm text-white bg-text1 bg-opacity-60">
                {title}
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} toggle={toggle} type={typeModal} url={url} />
    </div>
  );
};

export default DetailsVideos;
